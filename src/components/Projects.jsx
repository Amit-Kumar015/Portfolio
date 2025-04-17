import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward, MdGrid3X3 } from "react-icons/md";
import { FaCode, FaDatabase } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";
import { HiOutlineGlobe } from "react-icons/hi";

function Projects() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <div className='w-full h-full flex flex-col items-center px-3 gap-2 text-white bg-neutral-900 '>
            <div className="relative flex justify-center mb-5">
                <span className=" opacity-20 text-9xl font-extrabold tracking-widest relative text-amber-200">
                    WORKS
                </span>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
                    <span className="text-7xl font-extrabold mr-2 tracking-widest">
                        MY
                    </span>
                    <span className="text-7xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        PORTFOLIO
                    </span>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-14'>
                {
                    [
                        {
                            title: "Food Recipe Website",
                            desc: "A dynamic and responsive platform to Search for recipes by name, category, or cuisine and discover delicious dishes.",
                            live: "https://recipehunter.vercel.app/",
                            lang: "Javascript",
                            frontend: "React",
                            database: "None",
                            deploy: "Vercel",
                            github: "https://github.com/Amit-Kumar015/Food-Recipe-Website"
                        },
                        {
                            title: "Blog Website",
                            desc: "A dynamic blog website where users can explore, search, and read insightful articles on various topics.",
                            live: "https://mega-blog-dun.vercel.app",
                            lang: "Javascript",
                            frontend: "React",
                            database: "Appwrite",
                            deploy: "Vercel",
                            github: "https://github.com/Amit-Kumar015/MegaBlog"
                        },
                        {
                            title: "Flashcard App",
                            desc: "This is a Flashcard web app that helps users create, review and progress through flashcards using Leitner System.",
                            live: "",
                            lang: "Javascript",
                            frontend: "React",
                            database: "MongoDB",
                            deploy: "None",
                            github: "https://github.com/Amit-Kumar015/Flashcard_App"
                        },
                        {
                            title: "Backend Of Video Streaming Website",
                            desc: " A robust backend for a video streaming platform, enabling seamless video uploads, storage, and retrieval.",
                            live: "",
                            lang: "Javascript",
                            frontend: "Express.js",
                            database: "MongoDB",
                            deploy: "None",
                            github: "https://github.com/Amit-Kumar015/Backend-Project"
                        },
                        {
                            title: "Quiz App",
                            desc: "Your quiz app is an interactive web application that allows users to answer questions, test their knowledge, and track their progress.",
                            live: "https://quizquestapp.vercel.app/",
                            lang: "Javascript",
                            frontend: "React",
                            database: "None",
                            deploy: "Vercel",
                            github: "https://github.com/Amit-Kumar015/QuizApp"
                        },
                        {
                            title: "News Website",
                            desc: "A platform for delivering the latest news across various categories such as technology, sports, politics, entertainment, and more.",
                            live: "https://newsbuzz360.vercel.app/",
                            lang: "Javascript",
                            frontend: "React",
                            database: "None",
                            deploy: "Vercel",
                            github: "https://github.com/Amit-Kumar015/NewsBuzz-React"
                        }
                    ].map((proj) => (
                        <div key={proj.title} className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                            <div className='flex justify-between items-start'>
                                <div className='min-h-[10rem]'>
                                    <h4 className='text-xl font-bold mb-1'>{proj.title}</h4>
                                    <p className='text-gray-400 mb-1'> {proj.desc}
                                    </p>
                                </div>
                                {proj.live.length ? <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab(proj.live)} >
                                    <HiOutlineGlobe className='inline mr-1' />
                                    live
                                </div> : <div></div>}
                            </div>
                            <div className='my-2'>
                                <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                                    <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                        <FaCode className='inline text-pink-400 mr-2' />
                                        {proj.lang}
                                    </div>
                                    <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                        <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                        {proj.frontend}
                                    </div>
                                    <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                        <FaDatabase className='inline text-blue-300 mr-2' />
                                        {proj.database}
                                    </div>
                                    <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                        <CiCloud className='inline text-green-300 mr-2' />
                                        {proj.deploy}
                                    </div>
                                </div>
                            </div>
                            <hr className='bg-indigo-500 text-gray-600 mb-1' />
                            <span onClick={() => openInNewTab(proj.github)} className='flex mt-3 items-center gap-1 cursor-pointer'>
                                <FaGithub />
                                <span className='text-md font-medium text-opacity-25'>View Project Details</span>
                                <MdArrowOutward />
                            </span>
                        </div>

                    ))
                }
                
            </div>

            <div className='min-h-28 text-neutral-900'>s</div>
        </div>
    )
}

export default Projects
