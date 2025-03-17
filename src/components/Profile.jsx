import React from 'react'
import photo from "../../public/portfolio-2.jpg"
import { Typewriter } from 'react-simple-typewriter';
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router';

import { FaGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Profile() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    const navigate = useNavigate()

    return (
        <div className='w-full flex items-center px-3 gap-2 text-white bg-neutral-900'>
            <div >
                <img src={photo} alt="photo" width={500} className='rounded-3xl shadow-lg shadow-white' />
            </div>
            <div className='pl-10'>
                <h1 className="text-5xl font-bold">
                    - Hi, I am Amit Kumar
                </h1>
                <h1 className='pl-10 text-4xl'>
                    {' '}
                    <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-3xl font-bold">
                        <Typewriter
                            words={['Software Engineer', 'Web Developer', 'Tech Enthusiast']}
                            loop={Infinity}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <br />
                <p className='text-lg pr-10 font-serif font-normal'>
                    I'm a Delhi-based web developer and Tech enthusiast crafting innovative digital experiences, passionate about user-friendly interfaces, enriching lives through technology.
                </p>
                <div className='mt-10 flex justify-between items-center w-45 h-15 rounded-4xl bg-neutral-900 border border-red-500'>
                    <span className='pl-5 text-lg font-bold'>About Me</span>
                    <span className='bg-white w-15 h-15 text-center leading-[3.75rem] rounded-4xl cursor-pointer hover:bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 duration-300 delay-200 hover:w-16 hover:h-16' onClick={() => navigate("/about")}>
                        <MdArrowForwardIos className='inline text-black text-center' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile

// <div className='w-3xl flex bg-amber-200justify-center text-white border border-gray-400 rounded-2xl'>
//     <div className='w-1/6 bg-neutral-700 flex justify-center rounded-2xl'>
//         <img src={reactLogo} alt="profile photo" />
//     </div>
//     <div className='w-5/6 bg-neutral-700'>
//         <div className='flex flex-row justify-between items-center p-4'>
//             <div>
//                 <div>Amit Kummar</div>
//                 <div>Software Engineer</div>
//             </div>
//             <div className='flex flex-row gap-2'>
//                 <FaGithub onClick={() => openInNewTab("https://github.com/Amit-Kumar015")} />
//                 <FaSquareXTwitter onClick={() => openInNewTab("https://x.com/Amittkumar_")}/>
//             </div>
//         </div>

//         <div>
//             <IoLocationOutline className='inline'/>
//             <span>New Delhi, Delhi</span>
//         </div>
//         <div>
//             <MdOutlineEmail className='inline'/>
//             <span onClick={() => openInNewTab("mailto:amitk200415@gmail.com")}>amitk200415@gmail.com</span>
//         </div>
//         <div>
//             <FaLinkedin className='inline' />
//             <span onClick={() => openInNewTab("https://www.linkedin.com/in/amit-kumar-0b47ba200/")}>amitk200415@gmail.com</span>
//         </div>
//     </div>
// </div>