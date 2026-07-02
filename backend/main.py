from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from openpyxl import Workbook

from scoring import score_candidate
from ml_ranker import embed_job_description, semantic_similarity

import json
import os

app = FastAPI(title="RedFit AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=".*",
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def home():
    return {"status": "Backend running"}


@app.post("/rank")
async def rank_candidates(
    job_description: str = Form(...),
    candidates_file: UploadFile = File(...)
):

    # ------------------------
    # Read uploaded JSONL
    # ------------------------

    contents = await candidates_file.read()

    lines = contents.decode("utf-8").splitlines()

    candidates = []

    for line in lines:
        candidates.append(json.loads(line))

    # ------------------------
    # Stage 1
    # Fast Rule-Based Ranking
    # ------------------------

    ranked = []

    for candidate in candidates:

        score, reasons = score_candidate(candidate, job_description)

        ranked.append({
            "candidate": candidate,
            "candidate_id": candidate["candidate_id"],
            "name": candidate["profile"]["anonymized_name"],
            "title": candidate["profile"]["current_title"],
            "score": score,
            "reasons": reasons,
        })

    ranked.sort(key=lambda x: x["score"], reverse=True)

    # ------------------------
    # Stage 2
    # Semantic AI Reranking
    # ------------------------

    top500 = ranked[:500]

    jd_embedding = embed_job_description(job_description)

    for item in top500:

        similarity = semantic_similarity(
            jd_embedding,
            item["candidate"]
        )

        # Hybrid Score
        item["score"] += similarity * 70

        item["reasons"].append(
            f"Semantic AI Match: {round(similarity * 100,1)}%"
        )

    top500.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    final_rankings = top500[:100]

    # ------------------------
    # Generate Excel
    # ------------------------

    wb = Workbook()

    ws = wb.active

    ws.title = "Rankings"

    ws.append([
        "Rank",
        "Candidate ID",
        "Candidate Name",
        "Current Title",
        "Score"
    ])

    for i, candidate in enumerate(final_rankings, start=1):

        ws.append([
            i,
            candidate["candidate_id"],
            candidate["name"],
            candidate["title"],
            round(candidate["score"], 1)
        ])

    os.makedirs("downloads", exist_ok=True)

    excel_path = "downloads/ranked_candidates.xlsx"

    wb.save(excel_path)

    # ------------------------
    # Response
    # ------------------------

    return {
        "success": True,
        "total_candidates": len(candidates),
        "top_candidates": final_rankings,
        "download_url": "/download"
    }


@app.get("/download")
async def download_excel():

    return FileResponse(
        "downloads/ranked_candidates.xlsx",
        filename="ranked_candidates.xlsx",
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )