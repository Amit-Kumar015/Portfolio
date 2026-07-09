import Flashcard from "@/assets/images/Flashcard.png";
import moviebooking from "@/assets/images/moviebooking.png";
import mediamind from "@/assets/images/mediamind.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    title: "MediaMind AI",
    tech: "React.js, Python, FastAPI, MongoDB, LangChain, Groq API, Docker, Github Actions",
    results: [
      {
        title:
          "Built an AI-powered Document & Multimedia Q&A Platform using React.js, FastAPI, and MongoDB.",
      },
      {
        title:
          "Implemented a RAG-based pipeline using LangChain, FAISS, and HuggingFace embeddings for semantic search and contextual question answering.",
      },
      {
        title:
          "Integrated Whisper-based transcription to process audio and video files with timestamp extraction.",
      },
      {
        title:
          "Containerized using Docker and automated workflows with GitHub Actions.",
      },
    ],
    liveLink: "",
    githubLink: "https://github.com/Amit-Kumar015/MediaMind_AI",
    image: mediamind,
  },
  {
    title: "Movie Booking App",
    tech: "Python, FastAPI, PostgreSQL, Redis, Celery",
    results: [
      {
        title:
          "Developed a Movie Reservation backend system to search movies, view showtimes, and reserve seats.",
      },
      {
        title:
          "Designed and compared Pessimistic DB Locking and Redis Distributed Locks to handle 10K+  concurrent seat requests with zero double-bookings.",
      },
      {
        title:
          "Engineered a Redis TTL + Celery-based seat-hold state machine, automatically releasing unbooked seats after 10 minutes to maximize ticket inventory utilization.",
      },
    ],
    liveLink: "",
    githubLink: "https://github.com/Amit-kumar015/Movie_reservation-backend",
    image: moviebooking,
  },
  {
    title: "FlashCard App ",
    tech: "React.js, MongoDB, Express.js, Node.js",
    results: [
      {
        title:
          "Created a Flashcard web app to help users create, review, and progress using the Leitner System.",
      },
      {
        title:
          "Enabled users to log in, create flashcards, and categorize them by levels.",
      },
      {
        title:
          "Implemented a system where review dates automatically adjust based on correctness for efficient information retention.",
      },
    ],
    liveLink: "https://new-flashcard-app-one.vercel.app/",
    githubLink: "https://github.com/Amit-Kumar015/Flashcard_App",
    image: Flashcard,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />

        <div className="flex flex-col gap-16 mt-10 md:mt-24">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-6 py-8 md:p-12 lg:p-16 sticky overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl"
              style={{
                top: `calc(80px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white font-bold">
                      {project.title}
                    </h3>

                    <hr className="border-t border-white/10 mt-4 md:mt-6" />

                    <ul className="flex flex-col mt-6 gap-4">
                      {project.results.map((result) => (
                        <li
                          className="flex items-start text-sm md:text-base text-white/70 leading-relaxed gap-3"
                          key={result.title}
                        >
                          <CheckCircleIcon className="size-5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-8 pt-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <button className="bg-white hover:bg-neutral-200 transition-colors inline-flex items-center justify-center text-gray-950 h-11 w-full sm:w-auto px-5 rounded-xl font-medium text-sm shadow-md">
                          <span>Live Demo</span>
                          <ArrowUpRightIcon className="size-4 ml-1.5" />
                        </button>
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 transition-all inline-flex items-center justify-center text-white h-11 w-full sm:w-auto px-5 rounded-xl font-medium text-sm">
                          <span>GitHub</span>
                          <ArrowUpRightIcon className="size-4 ml-1.5" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
                  <div className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.06]">
                    <Image
                      className="w-full h-auto object-cover max-h-[320px] md:max-h-[400px] lg:max-h-none"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
