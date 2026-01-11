// app/page.tsx
import Shell from "../components/Shell";
import ModuleCard from "../components/ModuleCard";

export default function Page() {
  return (
    <Shell subtitle="AI Experiments Lab">
      <div className="hero">
        <div>
          <h1>
            Welcome to my <span className="accent">AI Experiment</span>
          </h1>

          <p className="lead">
            This site is a living laboratory — where voice agents, memory,
            automation, and experimental intelligence converge. Everything here
            is built, tested, and refined in real time.
          </p>

          <div className="tagline">Human-Directed · AI-Amplified · Always Evolving</div>
        </div>

        {/* HERO ORB VIDEO (put file in /public) */}
        <div className="glass videoWrap">
          <video
            className="heroVideo"
            src="/web-intro2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

      <div className="grid3">
        <ModuleCard
          title="T-Bone"
          desc="Persistent, memory-aware assistant: voice, calendar, tasks, reasoning — one intelligence layer powering your command center."
          href="/tbone"
        />
        <ModuleCard
          title="Playground"
          desc="Test prompts, tools, and workflows. Turn experiments into repeatable systems, then ship them into your ops hub."
          href="/playground"
        />
        <ModuleCard
          title="cAirBridge"
          desc="AI-powered caregiver coordination platform — bridging people, care, and context with agentic workflows."
          href="/cairbridge"
        />
      </div>
    </Shell>
  );
}
