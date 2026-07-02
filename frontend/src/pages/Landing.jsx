import { useNavigate } from "react-router-dom";


import {
  SiReact,
  SiFastapi,
  SiPython,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiVercel,
  SiHuggingface,
  SiScikitlearn,
} from "react-icons/si";
import { BsCpu } from "react-icons/bs";

import {
  Upload,
  BrainCircuit,
  Sparkles,
  BarChart3,
} from "lucide-react";

import glassBg from "../assets/glass-bg.jpeg";

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Hugging Face", icon: <SiHuggingface /> },

  
  {
  name: "scikit-learn",
  icon: (
    <img
      src="/logos/scikit-learn.svg"
      alt="scikit-learn"
      className="h-14 w-14 object-contain invert brightness-200"
    />
  ),
},
  {
  name: "Sentence Transformers",
  icon: <BsCpu />,
},
];


export default function Landing() {
const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

  <div className="
    flex items-center justify-between
    w-[92vw] max-w-7xl
    px-8 py-4

    rounded-full

    bg-white/[0.06]
    backdrop-blur-2xl
    border border-white/10

    shadow-[0_8px_32px_rgba(0,0,0,0.35)]
  ">

    {/* Logo */}
    <div className="text-white text-xl font-semibold tracking-tight">
      RedFit AI
    </div>

    {/* Navigation */}
    <nav className="hidden lg:flex gap-10 text-sm text-gray-300">

      <a className="hover:text-white transition">
        Platform
      </a>

      <a className="hover:text-white transition">
        Features
      </a>

      <a className="hover:text-white transition">
        Customers
      </a>

      <a className="hover:text-white transition">
        Pricing
      </a>

      <a className="hover:text-white transition">
        Contact
      </a>

    </nav>

    {/* Buttons */}
    <div className="flex items-center gap-3">

      <button className="text-gray-300 hover:text-white transition">
        Sign in
      </button>

      

      <button
  onClick={() => navigate("/get-started")}
  className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
>
  Start for free
</button>

    </div>

  </div>

</header>

      {/* HERO */}
<section className="relative h-screen overflow-hidden">

  {/* VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-80 "
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 w-full h-60 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>

  {/* CONTENT */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

    <h1 className="text-7xl font-semibold leading-tight max-w-6xl">
      AI-powered candidate intelligence
      <br />
      that understands real talent.
    </h1>

    <p className="mt-8 text-xl text-gray-200 max-w-3xl">
      RedFit AI ranks candidates using semantic understanding,
      behavioral signals and evidence-backed verification —
      not keyword matching.
    </p>

    <div className="mt-10 flex gap-5">
<button
  onClick={() => navigate("/get-started")}
  className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
>
  Start for free
</button>

    </div>

  </div>

</section>


      {/* TECH STACK */}

<section className="py-32 px-8 bg-[#0a0a0a]">

  <p className="text-center text-gray-500 uppercase tracking-[0.35em] text-xs mb-4">
    BUILT WITH
  </p>

  <h2 className="text-center text-5xl font-semibold mb-16">
    Modern AI technologies powering
    <br />
    intelligent hiring.
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

   {techStack.map((tech) => (

      <div
        key={tech}
        className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 h-36 flex items-center justify-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-2"
      >

        <div className="text-5xl text-gray-400 group-hover:text-white transition duration-300">
  {tech.icon}
</div>

<p className="mt-5 text-sm font-medium text-gray-300 group-hover:text-white transition">
  {tech.name}
</p>

      </div>

    ))}

  </div>

</section>

      {/* HOW IT WORKS */}
<section
  className="relative overflow-hidden py-40 px-8"
  
>
{/* Background Glass */}

{/* Background */}

<div className="absolute inset-0 bg-gradient-to-b
from-[#101010]/40
via-transparent
to-[#0a0a0a]/60">

  <img
  src={glassBg}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    opacity-30
    brightness-125
    contrast-125
    pointer-events-none
    select-none
  "
/>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Top fade */}
  <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>

</div>

<div className="relative z-10">
  <div className="max-w-7xl mx-auto">
  <div className="text-center mb-20">


    <p className="uppercase tracking-[0.35em] text-gray-500 text-xs mb-4">
      PROCESS
    </p>

    <h2 className="text-5xl font-semibold">
      How RedFit Works
    </h2>

    <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
      From uploading resumes to receiving explainable rankings —
      everything happens in seconds.
    </p>

  </div>
  

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

    {/* STEP 1 */}

    <div className="
group
relative
overflow-hidden
rounded-3xl

border
border-white/10

bg-gradient-to-br
from-white/[0.05]
to-white/[0.02]

backdrop-blur-2xl

p-8

transition-all
duration-500

hover:-translate-y-2
hover:border-white/20

shadow-[0_15px_40px_rgba(0,0,0,0.35)]
">

      <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Step 01
      </span>

      <div
  className="
  mt-8
  w-20
  h-20
  rounded-3xl
  border
  border-white/10
  bg-gradient-to-br
  from-white/10
  to-white/5
  flex
  items-center
  justify-center
  transition-all
  duration-500
  group-hover:scale-110
"
>
  <Upload className="w-9 h-9 text-gray-300 group-hover:text-white transition" />
</div>

      <h3 className="mt-8 text-2xl font-semibold">
        Upload Data
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Upload your Job Description along with resumes or candidate profiles.
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

    </div>



    {/* STEP 2 */}

    <div className="
group
relative
overflow-hidden
rounded-3xl

border
border-white/10

bg-gradient-to-br
from-white/[0.05]
to-white/[0.02]

backdrop-blur-2xl

p-8

transition-all
duration-500

hover:-translate-y-2
hover:border-white/20

shadow-[0_15px_40px_rgba(0,0,0,0.35)]
">

      <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Step 02
      </span>

      <div
  className="
  mt-8
  w-20
  h-20
  rounded-3xl
  border
  border-white/10
  bg-gradient-to-br
  from-white/10
  to-white/5
  flex
  items-center
  justify-center
  transition-all
  duration-500
  group-hover:scale-110
"
>
  <BrainCircuit className="w-9 h-9 text-gray-300 group-hover:text-white transition" />
</div>

      <h3 className="mt-8 text-2xl font-semibold">
        AI Analysis
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        RedFit extracts skills, experience, achievements and semantic meaning.
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

    </div>



    {/* STEP 3 */}

    <div className="
group
relative
overflow-hidden
rounded-3xl

border
border-white/10

bg-gradient-to-br
from-white/[0.05]
to-white/[0.02]

backdrop-blur-2xl

p-8

transition-all
duration-500

hover:-translate-y-2
hover:border-white/20

shadow-[0_15px_40px_rgba(0,0,0,0.35)]
">

      <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Step 03
      </span>

      <div
  className="
  mt-8
  w-20
  h-20
  rounded-3xl
  border
  border-white/10
  bg-gradient-to-br
  from-white/10
  to-white/5
  flex
  items-center
  justify-center
  transition-all
  duration-500
  group-hover:scale-110
"
>
  <Sparkles className="w-9 h-9 text-gray-300 group-hover:text-white transition" />
</div>

      <h3 className="mt-8 text-2xl font-semibold">
        Smart Ranking
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Candidates receive explainable AI scores backed by real evidence.
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

    </div>



    {/* STEP 4 */}

    <div className="
group
relative
overflow-hidden
rounded-3xl

border
border-white/10

bg-gradient-to-br
from-white/[0.05]
to-white/[0.02]

backdrop-blur-2xl

p-8

transition-all
duration-500

hover:-translate-y-2
hover:border-white/20

shadow-[0_15px_40px_rgba(0,0,0,0.35)]
">

      <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Step 04
      </span>

      <div
  className="
  mt-8
  w-20
  h-20
  rounded-3xl
  border
  border-white/10
  bg-gradient-to-br
  from-white/10
  to-white/5
  flex
  items-center
  justify-center
  transition-all
  duration-500
  group-hover:scale-110
"
>
  <BarChart3 className="w-9 h-9 text-gray-300 group-hover:text-white transition" />
</div>

      <h3 className="mt-8 text-2xl font-semibold">
        Hire Better
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Compare candidates, inspect AI reasoning and shortlist with confidence.
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

    </div>

  </div>
  </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="mt-40 border-t border-gray-800 px-10 py-12 text-gray-400 text-sm">

        <div className="grid md:grid-cols-4 gap-6">

          <div>
            <p className="text-white font-semibold">RedFit AI</p>
          </div>

          <div>
            <p>Platform</p>
            <p>Features</p>
            <p>Security</p>
          </div>

          <div>
            <p>Resources</p>
            <p>Docs</p>
            <p>Blog</p>
          </div>

          <div>
            <p>Company</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>

        </div>

        <p className="mt-10 text-center text-gray-600">
          © 2026 RedFit AI
        </p>

      </footer>

    </div>
  );
}