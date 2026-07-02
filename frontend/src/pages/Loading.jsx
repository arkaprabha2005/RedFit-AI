export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">

      <div className="w-16 h-16 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>

      <h1 className="text-4xl font-bold mt-10">
        RedFit AI
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Analyzing candidates...
      </p>

      <div className="mt-10 w-96 h-2 rounded-full bg-white/10 overflow-hidden">

        <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-indigo-500 animate-pulse"></div>

      </div>

      <div className="mt-8 space-y-2 text-gray-500 text-center">

        <p>✓ Parsing candidate dataset</p>

        <p>✓ Running Hybrid AI Ranking</p>

        <p>✓ Semantic AI Matching</p>

        <p>✓ Generating Top 100 Candidates</p>

      </div>

    </div>
  );
}