import React from 'react'
import photo from "../assets/react.svg"
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward, MdGrid3X3 } from "react-icons/md";
import { FaCode, FaDatabase } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";
import { HiOutlineGlobe } from "react-icons/hi";

function Projects() {
    const openInNewTab = (url) => {
        window.open(URL, "_blank", "noopener,noreferrer")
    }

    return (
        <div className='w-3xl bg-neutral-800 flex flex-col justify-center'>
            <div className='grid grid-cols-2 gap-3 pt-3'>
                <div className='border-1 border-solid border-white p-5 rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3>project name</h3>
                            <p>project desc</p>
                        </div>
                        <div className='bg-amber-600 p-0.5 px-2 rounded-2xl'>
                            <HiOutlineGlobe className='inline mr-1'/>
                            live
                        </div>
                    </div>
                    <img src={photo} alt="photo" height={20} width={20} className='rounded-full mt-2'/>
                    <div className='my-2'>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl'>
                                <FaCode className='inline text-pink-400 mr-2'/>
                                code
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl'>
                                <MdGrid3X3  className='inline text-amber-200 mr-2'/>
                                grid
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl'>
                                <FaDatabase className='inline text-blue-300 mr-2' />
                                database
                            </div>
                            <div className='bg-gray-700 flex justify-center items-center rounded-2xl'>
                                <CiCloud className='inline text-green-300 mr-2' />
                                cloud
                            </div>
                        </div>
                    </div>
                    {/* <div className='h-full rounded-b-full bg-indigo-500'></div> */}
                    <hr className='bg-indigo-500 text-gray-600'/>
                    <div onClick={() => openInNewTab("link")} className='flex mt-3 items-center gap-1'>
                        <FaGithub />
                        <span>View Project Details</span>
                        <MdArrowOutward />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>project name</h3>
                            <p>project desc</p>
                        </div>
                        <div>
                            <HiOutlineGlobe/>
                            live
                        </div>
                    </div>
                    <img src={photo} alt="photo" />
                    <div>
                        stacks
                        <div className='grid grid-cols-2'>
                            <div>
                                <FaCode />
                                code
                            </div>
                            <div>
                                <MdGrid3X3 />
                                grid
                            </div>
                            <div>
                                <FaDatabase />
                                database
                            </div>
                            <div>
                                <CiCloud />
                                cloud
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div onClick={() => openInNewTab("link")}>
                        <FaGithub />
                        <span>View Project Details</span>
                        <MdArrowOutward />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>project name</h3>
                            <p>project desc</p>
                        </div>
                        <div>
                            <HiOutlineGlobe/>
                            live
                        </div>
                    </div>
                    <img src={photo} alt="photo" />
                    <div>
                        stacks
                        <div className='grid grid-cols-2'>
                            <div>
                                <FaCode />
                                code
                            </div>
                            <div>
                                <MdGrid3X3 />
                                grid
                            </div>
                            <div>
                                <FaDatabase />
                                database
                            </div>
                            <div>
                                <CiCloud />
                                cloud
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div onClick={() => openInNewTab("link")}>
                        <FaGithub />
                        <span>View Project Details</span>
                        <MdArrowOutward />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h3>project name</h3>
                            <p>project desc</p>
                        </div>
                        <div>
                            <HiOutlineGlobe/>
                            live
                        </div>
                    </div>
                    <img src={photo} alt="photo" />
                    <div>
                        stacks
                        <div className='grid grid-cols-2'>
                            <div>
                                <FaCode />
                                code
                            </div>
                            <div>
                                <MdGrid3X3 />
                                grid
                            </div>
                            <div>
                                <FaDatabase />
                                database
                            </div>
                            <div>
                                <CiCloud />
                                cloud
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div onClick={() => openInNewTab("link")}>
                        <FaGithub />
                        <span>View Project Details</span>
                        <MdArrowOutward />
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Projects
