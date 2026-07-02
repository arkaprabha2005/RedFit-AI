import { useState } from "react";
import { Upload, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jobDescription from "../data/jobDescription";

export default function GetStarted() {

  const [jobDescriptionText, setJobDescriptionText] = useState(jobDescription);
  const [candidateFile, setCandidateFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerate = async () => {

    if (!candidateFile) {
      alert("Please upload candidates.jsonl");
      return;
    }

    const formData = new FormData();

    formData.append("job_description", jobDescriptionText);
    formData.append("candidates_file", candidateFile);

    try {

      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/rank", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setLoading(false);

      navigate("/dashboard", {
        state: {
          rankings: data.top_candidates,
          total: data.total_candidates,
        },
      });

    } catch (err) {

      setLoading(false);

      console.error(err);

      alert("Backend connection failed.");

    }

  };

  return (

    <div className="min-h-screen bg-[#0a0a0a] text-white flex justify-center px-6 py-20">

      <div className="w-full max-w-5xl">

        {/* Heading */}

        <h1 className="text-5xl font-semibold text-center">
          Get Started
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Upload your candidate dataset and provide the job description to generate AI-powered rankings.
        </p>

        {/* Job Description */}

        <div className="mt-16">

          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-gray-300" />
            <h2 className="text-xl font-semibold">
              Job Description
            </h2>
          </div>

          <textarea
            value={jobDescriptionText}
            onChange={(e) => setJobDescriptionText(e.target.value)}
            className="w-full h-72 rounded-3xl bg-white/[0.04] border border-white/10 p-6 resize-none outline-none focus:border-white/30 transition"
          />

        </div>

        {/* Upload */}

        <div className="mt-12">

          <div className="flex items-center gap-3 mb-4">
            <Upload className="w-6 h-6 text-gray-300" />
            <h2 className="text-xl font-semibold">
              Candidate Dataset (.jsonl)
            </h2>
          </div>

          <label className="block cursor-pointer">

            <div className="rounded-3xl border-2 border-dashed border-white/15 bg-white/[0.03] hover:bg-white/[0.05] transition p-12 text-center">

              <Upload className="mx-auto w-10 h-10 text-gray-400" />

              <p className="mt-4 text-lg">
                Click to upload
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Supports .jsonl files
              </p>

            </div>

            <input
              type="file"
              accept=".jsonl"
              className="hidden"
              onChange={(e) => setCandidateFile(e.target.files[0])}
            />

          </label>

          <p className="mt-4 text-gray-400">
            {candidateFile
              ? `Selected: ${candidateFile.name}`
              : "No file selected"}
          </p>

        </div>

        {/* Button */}

        <div className="mt-14 flex justify-center">

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Rankings"}
          </button>

        </div>

      </div>

      {/* Loading Overlay */}

      {loading && (

        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center z-50">

          <div className="w-20 h-20 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>

          <h2 className="text-4xl font-bold mt-10">
            RedFit AI
          </h2>

          <p className="text-gray-400 mt-4">
            Analyzing candidates...
          </p>

          <div className="mt-10 space-y-3 text-center">

            <p className="text-green-400">
              ✓ Parsing JSONL dataset
            </p>

            <p className="animate-pulse text-cyan-400">
              🤖 Running Hybrid AI Ranking...
            </p>

            <p className="text-green-400">
              ✓ Semantic AI Matching
            </p>

            <p className="text-green-400">
              ✓ Building Top 100 shortlist
            </p>

            <p className="text-green-400">
              ✓ Preparing Excel report
            </p>

          </div>

        </div>

      )}

    </div>

  );

}