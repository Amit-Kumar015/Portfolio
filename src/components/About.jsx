import React from 'react'
import { IoMdDownload } from "react-icons/io";

function About() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const languages = ["JavaScript", "Typescript", "Nextjs", "Reactjs", "Node.js", "MongoDB", "Express", "MySQL", "Tailwind", "Python", "C++", "C", "Git", "Figma", "Wordpress"];

  return (
    <div className='w-full h-full flex flex-col items-center px-3 gap-2 text-white bg-neutral-900'>
      <div className="relative flex justify-center mb-10">
        <span className=" opacity-20 text-9xl font-extrabold tracking-widest relative text-amber-200">
          RESUME
        </span>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
          <span className="text-7xl font-extrabold mr-2 tracking-widest">
            ABOUT
          </span>
          <span className="text-7xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            ME
          </span>
        </div>
      </div>

      <div className='w-full mt-10'>
        <div className='text-4xl font-bold mb-5'>
          PERSONAL INFOS
        </div>
        <div className='grid grid-cols-2 gap-5 text-xl pr-30'>
          <div>
            <span className='text-gray-300'>Name: </span>
            <span>Amit Kumar</span>
          </div>
          <div>
            <span className='text-gray-300'>Address: </span>
            <span>Delhi</span>
          </div>
          <div>
            <span className='text-gray-300'>Age: </span>
            <span>21</span>
          </div>
          <div>
            <span className='text-gray-300'>Language: </span>
            <span>English, Hindi</span>
          </div>
          <div>
            <span className='text-gray-300'>Nationality: </span>
            <span>Indian</span>
          </div>
          <div>
            <span className='text-gray-300'>Freelance: </span>
            <span>Available</span>
          </div>
          <div>
            <span className='text-gray-300'>Email: </span>
            <span>amitk200415@gmail.com</span>
          </div>
        </div>
      </div>

      <div className='w-full mt-7'>
        <div className='mt-10 flex justify-between items-center w-fit h-15 rounded-4xl bg-neutral-900 border border-white'>
          <span className='pl-5 text-xl font-medium mr-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent'>DOWNLOAD RESUME</span>
          <a
            href="/Resume.pdf"// Replace with actual resume file path
            download="Amit_Kumar_Resume.pdf"
            className='bg-white w-15 h-15 text-center leading-[3.75rem] rounded-4xl hover:bg-gradient-to-r from-purple-400 to-blue-500 text-white group flex items-center justify-center'
          >
            <IoMdDownload className='text-black text-3xl group-hover:text-white' />
          </a>
        </div>
      </div>

      <div className='mt-14'>
        <span className='text-neutral-900'>________________________________________________</span>
        <hr className='text-white' />
      </div>

      <div className='flex flex-col justify-center mt-20'>
        <div className='text-center text-4xl font-bold'>
          SKILLS
        </div>
        <div className='mt-14 grid grid-cols-5 gap-3 '>
          {languages.map((lang) => (
            <div
              key={lang}
              className='border-1 border-solid border-gray-500 w-44 text-center text-lg font-medium py-3 rounded-md hover:bg-gradient-to-r from-purple-400 to-blue-500 hover:shadow-lg shadow-white duration-300'
            >
              {lang}
            </div>
          ))}
        </div>
      </div>

      <div className='mt-32'>
        <span className='text-neutral-900'>________________________________________________</span>
        <hr className='text-white' />
      </div>

      <div className='flex flex-col justify-center mt-10'>
        <div className='text-center text-4xl font-bold'>
          EDUCATION
        </div>
        <div className='border-4 bg-neutral-900 border-white/50 mt-10 pr-10 py-2 pt-3 px-5  border-l-0 border-r-0 rounded-br-3xl rounded-tl-3xl rounded-md'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <span className='text-xl font-semibold flex justify-start mr-10 cursor-pointer lg:justify-center items-center lg:gap-2 hover:underline' onClick={() => openInNewTab("http://www.ipu.ac.in/")}>Guru Gobind Singh Indraprastha University</span>
            <span className='text-md text-slate-400 font-semibold'>July 2026</span>
          </div>
          <p className='text-slate-300 text-md my-2 tracking-wide font-medium'>Btech - Electronics and Communication Eng.</p>
        </div>
      </div>

      <div className='mt-32'>
        <span className='text-neutral-900'>________________________________________________</span>
        <hr className='text-white' />
      </div>

      <div className='flex justify-center items-center mt-20'>
        <span className='text-4xl font-bold'>EXPERIENCE</span>
      </div>

      <div className="flex justify-center bg-white min-h-[52rem] py-10 mt-10">
        <div className="relative w-1 bg-white h-full">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

          {/* React.js Developer */}
          <div className="flex flex-col items-center relative mb-80">
            {/* Circle Icon */}
            <div className="absolute -left-7.3 bg-white p-3 rounded-full border-4 border-neutral-700 flex items-center justify-center w-16 h-16">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-8 h-8" />
            </div>
            {/* Timeline Card */}
            <div className="absolute left-[-420px] right-11 top-10 bg-neutral-800 text-white p-5 rounded-xl shadow-lg w-fit">
              <h3 className="text-xl font-bold">React.js Developer</h3>
              <p className="text-md text-gray-400">React.js, Tailwind CSS</p>
              <ul className="list-disc list-inside text-md mt-2">
                <li>Developed and maintained web apps using React.js & Tailwind.</li>
                <li>Implemented responsive design & ensured cross-browser compatibility.</li>
                <li>Built various projects and mastered React components.</li>
              </ul>
            </div>
            {/* Date */}
            <p className="absolute right-[-200px] top-10 text-gray-300 text-sm">Nov 2023 - March 2024</p>
          </div>

          {/* fullstack Developer */}
          <div className="flex flex-col items-center relative mb-96">
            {/* Circle Icon */}
            <div className="absolute -right-7.3 bg-white p-3 rounded-full border-4 border-neutral-700 flex items-center justify-center w-16 h-16">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAA7ElEQVR4AWJwLwC0WwcaCENhFMefoV6hABgEBhDAxN7jAggRPcSeoAcYQFgIInuSIcAlwLqHM45klvtt0PCXO7Pfvu3Gskn7c3AG/WldhNIpwRaNDQJadb9EH9agYiWQ13G55doRPYwFLkKNIpiQ68QcZIqUXHuszUBMo1PJLm2JJ/qoo0FcSKZCBdGc62asd5h8wkRTKxCIkwsvZPMU+h7tQP4VNB5zehNR4LWq6tD+y+N0xHyH8/wzigFbXEA2TColiMed3ODTBMQUPXlzEJP0ZQnWl9t9MyQr8KdiwTy0C2WD4rnzN80MmvcG9xb1UQNO3ZEAAAAASUVORK5CYII=" alt="React" className="w-10 h-10" />
            </div>
            {/* Timeline Card */}
            <div className="absolute right-[-420px] left-12 top-10 bg-neutral-800 text-white p-7 rounded-xl shadow-lg w-fit">
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <p className="text-md text-gray-400">MERN Stack</p>
              <ul className="list-disc list-inside text-md mt-2">
                <li>Crafting and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                <li>Collaborating with other developers to design and implement new ideas.</li>
                <li>Ensuring optimal performance and scalability of applications.</li>
                <li>Participating in code reviews.</li>
              </ul>
            </div>
            {/* Date */}
            <p className="absolute left-[-200px] top-10 text-gray-300 text-md">April 2024 - Present</p>
          </div>


          {/* Nextjs Developer */}
          <div className="flex flex-col items-center relative mb-80">
            {/* Circle Icon */}
            <div className="absolute -right-7.3 bg-white p-3 rounded-full border-4 border-neutral-700 flex items-center justify-center w-16 h-16">
              <span className="text-black font-bold text-xl">N</span>
            </div>
            {/* Timeline Card */}
            <div className="absolute left-[-420px] right-11 top-10 bg-neutral-800 text-white p-5 rounded-xl shadow-lg w-fit">
              <h3 className="text-xl font-bold">Next.js Developer</h3>
              <p className="text-md text-gray-400">Next.js</p>
              <ul className="list-disc list-inside text-md mt-2">
                <li>Developed responsive and performant web apps using Next.js.</li>
                <li>Worked with server-side rendering & API routes.</li>
              </ul>
            </div>
            {/* Date */}
            <p className="absolute right-[-200px] top-10 text-gray-300 text-md">Feb 2025 - Present</p>
          </div>
        </div>
      </div>


      <div className='min-h-60 text-neutral-900'>s</div>
    </div>
  )
}

export default About
