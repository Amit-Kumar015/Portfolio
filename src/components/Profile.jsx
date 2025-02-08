import React from 'react'
import reactLogo from "../assets/react.svg"
import { FaGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Profile() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <div className='w-3xl bg-neutral-800 flex justify-center'>
            <div className='w-1/6 bg-amber-200 flex justify-center'>
                <img src={reactLogo} alt="profile photo" />
            </div>
            <div className='w-5/6 bg-amber-500'>
                <div className='flex flex-row justify-between items-center p-4'>
                    <div>
                        <div>Amit Kummar</div>
                        <div>Software Engineer</div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <FaGithub onClick={() => openInNewTab("https://github.com/Amit-Kumar015")} />
                        <FaSquareXTwitter onClick={() => openInNewTab("https://x.com/Amittkumar_")}/>
                    </div>
                </div>

                <div>
                    <IoLocationOutline className='inline'/>
                    <span>New Delhi, Delhi</span>
                </div>
                <div>
                    <MdOutlineEmail className='inline'/>
                    <span onClick={() => openInNewTab("mailto:amitk200415@gmail.com")}>amitk200415@gmail.com</span>
                </div>
                <div>
                    <FaLinkedin className='inline' />
                    <span onClick={() => openInNewTab("https://www.linkedin.com/in/amit-kumar-0b47ba200/")}>amitk200415@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Profile
