import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const { state } = useLocation();

  const rankings = state?.rankings || [];
  const total = state?.total || 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-10 py-14">

      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">

        <div>
          <h1 className="text-5xl font-bold">
            Candidate Rankings
          </h1>

          <p className="text-gray-400 mt-3">
            AI-ranked shortlist generated using RedFit AI Hybrid Ranking Engine.
          </p>
        </div>

        <a
          href="http://127.0.0.1:8000/download"
          className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
        >
          Download Top 100 (.xlsx)
        </a>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-gray-500 text-sm">Candidates</p>
          <h2 className="text-3xl font-bold mt-2">
            {total.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-gray-500 text-sm">Shortlisted</p>
          <h2 className="text-3xl font-bold mt-2">
            100
          </h2>
        </div>

        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-gray-500 text-sm">Ranking Engine</p>
          <h2 className="text-xl font-semibold mt-2">
            Hybrid AI
          </h2>
        </div>

        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-gray-500 text-sm">Status</p>
          <h2 className="text-xl font-semibold mt-2 text-green-400">
            Completed ✓
          </h2>
        </div>

      </div>

      {/* Cards */}

      <div className="space-y-5">

        {rankings.map((candidate, index) => (

          <div
            key={candidate.candidate_id}
            className={`rounded-3xl border p-7 flex justify-between items-start transition
            ${
              index === 0
                ? "border-yellow-500 bg-yellow-500/5"
                : index === 1
                ? "border-gray-400 bg-white/[0.04]"
                : index === 2
                ? "border-orange-500 bg-orange-500/5"
                : "border-white/10 bg-white/[0.04]"
            }`}
          >

            <div>

              <p className="text-gray-500 text-sm">
                Rank #{index + 1}
              </p>

              <h2 className="text-2xl font-semibold mt-1">
                {candidate.name}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {candidate.candidate_id}
              </p>

              <p className="text-gray-400 mt-3">
                {candidate.title}
              </p>

              {/* Explainable AI */}

              <div className="mt-5 space-y-1">

                {candidate.reasons?.map((reason, i) => (

                  <p
                    key={i}
                    className="text-sm text-green-400"
                  >
                    ✓ {reason}
                  </p>

                ))}

              </div>

            </div>

            <div className="text-right">

              <p className="text-xs uppercase tracking-widest text-gray-500">
                RedFit Score
              </p>

              <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                {Math.round(candidate.score)}
              </h2>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}