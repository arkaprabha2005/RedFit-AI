from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

print("Loading Sentence Transformer model...")
model = SentenceTransformer("all-MiniLM-L6-v2")
print("Model loaded!")


def build_candidate_text(candidate):
    profile = candidate.get("profile", {})

    skills = ", ".join(
        skill["name"] for skill in candidate.get("skills", [])
    )

    history = " ".join(
        job.get("description", "")
        for job in candidate.get("career_history", [])
    )

    return f"""
    {profile.get('current_title','')}
    {profile.get('summary','')}
    Skills: {skills}
    Experience: {profile.get('years_of_experience',0)} years
    Career: {history}
    """


def embed_job_description(job_description):
    return model.encode(job_description)


def semantic_similarity(jd_embedding, candidate):

    candidate_text = build_candidate_text(candidate)

    candidate_embedding = model.encode(candidate_text)

    similarity = cosine_similarity(
        [jd_embedding],
        [candidate_embedding]
    )[0][0]

    return float(similarity)