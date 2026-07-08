import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const workExperience = [
  {
    company: "The Group Three",
    role: "Full-Stack Developer Intern",
    duration: "Jan 2026 – June 2026",
    location: "Delhi",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "A/B Testing"],
    bullets: [
      {
        text: "Developed a complete Admin Panel using React.js and Tailwind CSS, and contributed to the backend architecture using Node.js and Express.js.",
      },
      {
        text: "Performed A/B testing to optimize UI/UX layouts, substantially improving client conversion rates.",
      },
      {
        text: "Independently engineered the complete Crawlux platform frontend using React.js while tuning backend performance hooks.",
      },
      {
        text: "Built and integrated secure cross-platform email automation workflows, referral hubs, and profile badge tracking modules.",
      },
    ],
  },
  {
    company: "NeuralSift",
    role: "App Development Intern",
    duration: "June 2025 – Aug 2025",
    location: "Hybrid",
    skills: ["Firebase Analytics", "BigQuery", "Real-time Voice/Video", "UI/UX Design"],
    bullets: [
      {
        text: "Integrated Firebase Analytics and BigQuery architectures, enabling raw data-driven insights and improving tracking metrics accuracy by 35%.",
      },
      {
        text: "Collaborated to bridge real-time low-latency voice and video calling features, resulting in a 25% increase in active session retention durations.",
      },
      {
        text: "Revamped core application UI/UX flows, reducing user path navigation timeframes by 20% alongside boosted approval scores.",
      },
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="My Journey"
          title="Work Experience"
          description="A timeline of building production applications and sharpening full-stack systems engineering"
        />

        <div className="flex flex-col gap-16 mt-10 md:mt-24">
          {workExperience.map((exp, expIndex) => (
            <Card
              key={`${exp.company}-${exp.role}`}
              className="px-6 py-8 md:p-12 lg:p-16 sticky overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl"
              style={{
                top: `calc(80px + ${expIndex * 40}px)`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                
                {/* Left Column: Company Details & Core Metadata */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm font-medium tracking-wider text-purple-400 uppercase">
                        {exp.duration}
                      </span>
                      <span className="text-white/30 text-xs hidden sm:inline">•</span>
                      <span className="text-sm text-white/50">{exp.location}</span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white font-bold mt-2">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-white/80 font-medium mt-1">
                      {exp.role}
                    </p>
                    
                    <hr className="border-t border-white/10 mt-4 md:mt-6" />
                  </div>

                  {/* Core Tools Used Badges */}
                  <div className="mt-6 lg:mt-0">
                    <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-3">
                      Core Core Contributions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-white/5 text-white/80 border border-white/10 px-3 py-1 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Bullet Accomplishments */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <ul className="flex flex-col gap-5">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        className="flex items-start text-sm md:text-base text-white/70 leading-relaxed gap-4"
                        key={idx}
                      >
                        <CheckCircleIcon className="size-5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};