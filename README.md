# RedFit-AI
# 🚀 RedFit AI
### Intelligent Candidate Discovery & Ranking Platform

RedFit AI is an AI-powered recruitment platform designed to help recruiters discover, evaluate, and rank candidates intelligently rather than relying on traditional keyword-based Applicant Tracking Systems (ATS).

Instead of simply matching keywords, RedFit AI understands job descriptions contextually, analyzes candidate resumes using semantic matching and multi-factor evaluation, and generates an explainable ranking of the most suitable candidates.

---

## 📌 Problem Statement

Recruiters often receive hundreds or thousands of applications for a single job opening. Traditional ATS solutions primarily depend on keyword matching, causing many qualified candidates to be overlooked simply because they use different terminology.

RedFit AI addresses this problem by:

- Understanding job descriptions contextually
- Extracting meaningful information from resumes
- Comparing candidates semantically instead of literally
- Ranking candidates using multiple evaluation signals
- Providing transparent explanations behind every ranking

---

# ✨ Features

## 📄 Intelligent Job Description Analysis

- Upload Job Description
- Extracts:
  - Required Skills
  - Preferred Skills
  - Experience Requirements
  - Education
  - Responsibilities

---

## 📑 Resume Parsing

Supports candidate resume uploads and extracts:

- Technical Skills
- Experience
- Education
- Projects
- Certifications
- Contact Information

---

## 🧠 Semantic Candidate Matching

Unlike keyword search, RedFit AI compares:

- Meaning
- Context
- Skill relevance

Example:

Job Description:
```
Backend API Development
```

Resume:

```
Built RESTful microservices using Express.js
```

Traditional ATS:
❌ Low Match

RedFit AI:
✅ High Match

---

## ⚖ Multi-Factor Candidate Scoring

Candidates are evaluated using weighted signals including:

- Skills Match
- Semantic Similarity
- Relevant Experience
- Projects
- Certifications
- Education
- Resume Completeness

Each signal contributes to an overall Match Score.

---

## 📊 Explainable Candidate Ranking

Instead of displaying only a score, RedFit AI explains:

✔ Why the candidate ranked highly

✔ Skills matched

✔ Missing requirements

✔ Candidate strengths

This allows recruiters to make informed hiring decisions.

---

# 🏗 System Architecture

```

Recruiter Dashboard
│
├── Upload Job Description
├── Upload Candidate Resumes
│
▼

Backend API (Node.js + Express)

│

├── Resume Parser

├── JD Analyzer

├── AI Matching Engine

│ ├── Semantic Matching

│ ├── Skill Comparison

│ ├── Weighted Scoring

│ └── Candidate Ranking

│

▼

Results Dashboard

├── Ranked Candidates

├── Match Scores

├── Score Explanation

└── Shortlisted Candidates
