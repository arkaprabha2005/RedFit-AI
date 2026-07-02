import re

def score_candidate(candidate, job_description):

    score = 0
    reasons = []

    jd = job_description.lower()

    profile = candidate.get("profile", {})
    signals = candidate.get("redrob_signals", {})

    # -----------------------------
    # Experience
    # -----------------------------
    exp = profile.get("years_of_experience", 0)

    exp_score = min(exp * 2, 20)

    score += exp_score

    if exp > 3:
        reasons.append(f"{exp} years experience")

    # -----------------------------
    # Skills
    # -----------------------------
    matched = 0

    for skill in candidate.get("skills", []):

        skill_name = skill["name"].lower()

        if skill_name in jd:

            matched += 1

            score += 4

            if skill.get("proficiency") == "advanced":
                score += 2

    reasons.append(f"{matched} matching skills")

    # -----------------------------
    # Summary Match
    # -----------------------------
    summary = profile.get("summary", "").lower()

    important = re.findall(r"\b[a-zA-Z]+\b", jd)

    semantic = 0

    for word in important:

        if len(word) > 3 and word in summary:
            semantic += 1

    semantic = min(semantic, 25)

    score += semantic

    # -----------------------------
    # GitHub Activity
    # -----------------------------
    github = signals.get("github_activity_score", -1)

    if github > 0:

        score += github

        reasons.append("Active GitHub")

    # -----------------------------
    # Open to Work
    # -----------------------------
    if signals.get("open_to_work_flag"):
        score += 5
        reasons.append("Open to work")

    # -----------------------------
    # Profile Completeness
    # -----------------------------
    completeness = signals.get("profile_completeness_score", 0)

    score += completeness * 0.08

    # -----------------------------
    # Recruiter Response
    # -----------------------------
    response = signals.get("recruiter_response_rate", 0)

    score += response * 10

    # -----------------------------
    # Interview Completion
    # -----------------------------
    interview = signals.get("interview_completion_rate", 0)

    score += interview * 8

    # -----------------------------
    # Skill Assessments
    # -----------------------------
    assessments = signals.get("skill_assessment_scores", {})

    if len(assessments):

        avg = sum(assessments.values()) / len(assessments)

        score += avg * 0.2

        reasons.append("Strong assessments")

    return round(score,2), reasons