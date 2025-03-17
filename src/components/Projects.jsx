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
                <div className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                    <div className='flex justify-between items-start'>
                        <div className='min-h-[10rem]'>
                            <h4 className='text-xl font-bold mb-1'>Food Recipe Website</h4>
                            <p className='text-gray-400 mb-1'> A dynamic and responsive platform to Search for recipes by name, category, or cuisine and discover delicious dishes.
                            </p>
                        </div>
                        <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab("https://recipehunter.vercel.app/")} >
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div>
                    </div>
                    {/* <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2' /> */}
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaCode className='inline text-pink-400 mr-2' />
                                Javascript
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                React
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                None
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                Vercel
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600 mb-1' />
                    <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015/Food-Recipe-Website")} className='flex mt-3 items-center gap-1 cursor-pointer'>
                        <FaGithub />
                        <span className='text-md font-medium text-opacity-25'>View Project Details</span>
                        <MdArrowOutward />
                    </span>
                </div>
                <div className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                    <div className='flex justify-between items-start'>
                        <div className='min-h-[10rem]'>
                            <h4 className='text-xl font-bold mb-1'>Blog Website</h4>
                            <p className='text-gray-400 mb-1'>A dynamic blog website where users can explore, search, and read insightful articles on various topics.
                            </p>
                        </div>
                        <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab("https://mega-blog-dun.vercel.app")} >
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div>
                    </div>
                    {/* <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2' /> */}
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaCode className='inline text-pink-400 mr-2' />
                                Javascript
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                React
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                Appwrite
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                Vercel
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600 mb-1 ' />
                    <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015/MegaBlog")} className='flex mt-3 items-center gap-1 cursor-pointer'>
                        <FaGithub />
                        <span className='text-md text-opacity-25 font-medium'>View Project Details</span>
                        <MdArrowOutward />
                    </span>
                </div>
                <div className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                    <div className='flex justify-between items-start'>
                        <div className='min-h-[10rem]'>
                            <h4 className='text-xl font-bold mb-1'>Flashcard App</h4>
                            <p className='text-gray-400 mb-1'>This is a Flashcard web app that helps users create, review and progress through flashcards using Leitner System. 
                            </p>
                        </div>
                        {/* <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab("https://mega-blog-dun.vercel.app")} >
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div> */}
                    </div>
                    {/* <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2' /> */}
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaCode className='inline text-pink-400 mr-2' />
                                Javascript
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                React
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                MongoDB
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                None
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600 mb-1' />
                    <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015/Flashcard_App")} className='flex mt-3 items-center gap-1 cursor-pointer'>
                        <FaGithub />
                        <span className='text-md text-opacity-25 font-medium'>View Project Details</span>
                        <MdArrowOutward />
                    </span>
                </div>
                <div className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                    <div className='flex justify-between items-start'>
                        <div className='min-h-[10rem]'>
                            <h4 className='text-xl font-bold mb-1'>Backend Of Video Streaming Website</h4>
                            <p className='text-gray-400 mb-1'> A robust backend for a video streaming platform, enabling seamless video uploads, storage, and retrieval. 
                            </p>
                        </div>
                        {/* <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab("https://mega-blog-dun.vercel.app")} >
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div> */}
                    </div>
                    {/* <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2' /> */}
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaCode className='inline text-pink-400 mr-2' />
                                Javascript
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                Express.js
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                MongoDB
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                None
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600 mb-1' />
                    <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015/Backend-Project")} className='flex mt-3 items-center gap-1 cursor-pointer'>
                        <FaGithub />
                        <span className='text-md text-opacity-25 font-medium'>View Project Details</span>
                        <MdArrowOutward />
                    </span>
                </div>
                <div className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                    <div className='flex justify-between items-start'>
                        <div className='min-h-[10rem]'>
                            <h4 className='text-xl font-bold mb-1'>Quiz App</h4>
                            <p className='text-gray-400 mb-1'>Your quiz app is an interactive web application that allows users to answer questions, test their knowledge, and track their progress.
                            </p>
                        </div>
                        <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab("https://quizquestapp.vercel.app/")} >
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div>
                    </div>
                    {/* <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2' /> */}
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaCode className='inline text-pink-400 mr-2' />
                                Javascript
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                React
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                None
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                Vercel
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600 mb-1' />
                    <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015/QuizApp")} className='flex mt-3 items-center gap-1 cursor-pointer'>
                        <FaGithub />
                        <span className='text-md text-opacity-25 font-medium'>View Project Details</span>
                        <MdArrowOutward />
                    </span>
                </div>
                <div className='border-1 border-solid border-gray-500 p-5 rounded-xl max-w-[20rem] hover:shadow-md shadow-white duration-300'>
                    <div className='flex justify-between items-start'>
                        <div className='min-h-[10rem]'>
                            <h4 className='text-xl font-bold mb-1'>News Website</h4>
                            <p className='text-gray-400 mb-1'>A platform for delivering the latest news across various categories such as technology, sports, politics, entertainment, and more.
                            </p>
                        </div>
                        <div className='bg-amber-600 min-w-[65px] p-0.5 px-2 rounded-2xl self-start cursor-pointer' onClick={() => openInNewTab("https://newsbuzz360.vercel.app/")} >
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div>
                    </div>
                    {/* <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2' /> */}
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3 mb-4 mt-4'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaCode className='inline text-pink-400 mr-2' />
                                Javascript
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <MdGrid3X3 className='inline text-amber-200 mr-2' />
                                React
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                None
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl p-0.5'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                Vercel
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600 mb-1' />
                    <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015/NewsBuzz-React")} className='flex mt-3 items-center gap-1 cursor-pointer'>
                        <FaGithub />
                        <span className='text-md text-opacity-25 font-medium'>View Project Details</span>
                        <MdArrowOutward />
                    </span>
                </div> 
            </div>

            <div className='min-h-28 text-neutral-900'>s</div>
        </div>
    )
}

export default Projects
