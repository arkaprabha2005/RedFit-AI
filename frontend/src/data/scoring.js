// Simple RedFit scoring engine (v1)

const JOB_KEYWORDS = [
  "ml",
  "ai",
  "python",
  "data",
  "backend",
  "spark",
  "nlp",
  "retrieval",
  "ranking"
];

export function calculateScore(candidate) {
  let score = 0;

  // 1. EXPERIENCE SCORE (0–40)
  const exp = candidate.profile.years_of_experience || 0;
  score += Math.min(exp * 5, 40);

  // 2. SKILL MATCH SCORE (0–40)
  let skillScore = 0;

  candidate.skills.forEach((s) => {
    const name = s.name.toLowerCase();

    JOB_KEYWORDS.forEach((kw) => {
      if (name.includes(kw)) {
        skillScore += 8;
      }
    });
  });

  score += Math.min(skillScore, 40);

  // 3. BONUS SIGNALS (0–20)
  if (candidate.profile.headline.toLowerCase().includes("engineer")) {
    score += 10;
  }

  if (candidate.profile.headline.toLowerCase().includes("ml")) {
    score += 10;
  }

  return Math.min(Math.round(score), 100);
}