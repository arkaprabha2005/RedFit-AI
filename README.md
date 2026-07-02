# 🚀 RedFit AI

## Intelligent Candidate Discovery & Ranking Platform

RedFit AI is an AI-powered recruitment platform that helps recruiters
discover, evaluate, and rank candidates intelligently. Unlike
traditional Applicant Tracking Systems (ATS) that rely primarily on
keyword matching, RedFit AI uses semantic understanding and multi-factor
evaluation to identify the best-fit candidates for a given role.

------------------------------------------------------------------------

# 📌 Problem Statement

Recruiters often receive hundreds of applications for a single opening.
Traditional ATS solutions frequently miss qualified candidates because
they depend heavily on exact keyword matches.

RedFit AI solves this by: - Understanding job descriptions
contextually - Parsing resumes into structured information - Performing
semantic matching beyond keywords - Combining multiple candidate signals
into one explainable score - Producing an intelligent ranked shortlist

------------------------------------------------------------------------

# ✨ Features

### 📄 Intelligent Job Description Analysis

-   Upload Job Description
-   Extract required skills
-   Extract preferred skills
-   Identify responsibilities
-   Analyze education and experience requirements

### 📑 Resume Parsing

Extracts: - Skills - Experience - Education - Projects -
Certifications - Contact Information

### 🧠 Semantic Matching

Compares candidate resumes with the Job Description using contextual
understanding instead of exact keyword matching.

### ⚖ Multi-Factor Candidate Scoring

Candidates are scored using: - Semantic Similarity - Skills Match -
Experience - Projects - Certifications - Education - Resume Completeness

### 📊 Explainable Ranking

Every candidate receives: - Overall Match Score - Ranking Position -
Matched Skills - Missing Skills - Recommendation Summary

------------------------------------------------------------------------

# 🏗 System Architecture

    Recruiter Dashboard (React + Tailwind)
                │
                ▼
         Backend API (Node.js + Express)
                │
         ┌──────┴────────┐
         │               │
    JD Analyzer     Resume Parser
         │               │
         └──────┬────────┘
                ▼
          AI Matching Engine
       • Semantic Matching
       • Weighted Scoring
       • Ranking
                │
                ▼
          Results Dashboard

------------------------------------------------------------------------

# 🔄 End-to-End Workflow

### 1. Job Description Upload

Recruiter uploads the job description.

### 2. Requirement Extraction

AI extracts: - Skills - Experience - Qualifications - Responsibilities

### 3. Resume Upload

Candidate resumes are uploaded individually or in bulk.

### 4. Resume Parsing

The system extracts: - Skills - Projects - Experience - Education -
Certifications

### 5. Semantic Matching

Resumes are compared with the Job Description using semantic similarity.

### 6. Multi-Factor Scoring

Weighted scoring is performed using: - Skills Match - Semantic
Similarity - Experience - Projects - Certifications - Education

### 7. Intelligent Ranking

Candidates are sorted according to their final score.

### 8. Explainable Output

Recruiters receive: - Ranked candidate list - Match scores - Explanation
for rankings - Shortlist recommendations

------------------------------------------------------------------------

# 🧮 Candidate Scoring

  Signal                  Weight
  --------------------- --------
  Semantic Similarity        35%
  Skills Match               25%
  Experience                 20%
  Projects                   10%
  Certifications              5%
  Education                   5%

*Weights are configurable depending on recruiter requirements.*

------------------------------------------------------------------------

# 💻 Technology Stack

## Frontend

-   React.js
-   Tailwind CSS
-   Vite

## Backend

-   Node.js
-   Express.js

## AI Layer

-   NLP
-   Semantic Similarity
-   Resume Parsing
-   Weighted Scoring Algorithm

## Deployment

-   Vercel

## Version Control

-   Git
-   GitHub

------------------------------------------------------------------------

# 📁 Project Structure

``` text
RedFit-AI/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── resumes/
├── README.md
└── package.json
```

------------------------------------------------------------------------

# 📈 Results

-   Intelligent ranking beyond keyword matching
-   Explainable candidate recommendations
-   Reduced manual resume screening effort
-   Fast processing using lightweight NLP and weighted scoring
-   Scalable for batch resume evaluation

------------------------------------------------------------------------

# 🎯 Benefits

-   Faster recruitment
-   Better candidate discovery
-   Explainable AI decisions
-   Improved hiring quality
-   Reduced recruiter workload

------------------------------------------------------------------------

# 🚀 Future Improvements

-   PDF OCR support
-   LLM-powered resume insights
-   Skill gap analysis
-   AI interview question generation
-   LinkedIn integration
-   Recruiter analytics dashboard
-   Bias detection
-   Multi-language resume support

------------------------------------------------------------------------

# ⚙ Installation

``` bash
git clone https://github.com/yourusername/redfit-ai.git
cd redfit-ai
npm install
```

Run frontend:

``` bash
npm run dev
```

Run backend:

``` bash
node server.js
```

------------------------------------------------------------------------

# 👥 Team

Developed for the **Data & AI Challenge -- Intelligent Candidate
Discovery Hackathon**.

------------------------------------------------------------------------

# 📄 License

This project is intended for educational, research, and hackathon
purposes.
