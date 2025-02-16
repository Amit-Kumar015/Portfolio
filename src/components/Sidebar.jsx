import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

function Sidebar() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <div className='w-[10%] bg-neutral-900'>
            <div className='w-full text-white flex flex-col items-center justify-center py-5 gap-5'>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                    <IoMdHome className="text-white text-2xl"/>
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                    <IoPersonSharp className="text-white text-2xl"/>
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                    <MdOutlineWorkOutline className="text-white text-2xl"/>
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                    <IoIosMail className="text-white text-2xl"/>
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                <FaLinkedin className='text-white text-2xl' onClick={() => openInNewTab("https://www.linkedin.com/in/amit-kumar-0b47ba200/")}/>
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                <FaGithub className="text-white text-2xl" onClick={() => openInNewTab("https://github.com/Amit-Kumar015")} />
                </span>
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600">
                <FaSquareXTwitter className="text-white text-2xl"  onClick={() => openInNewTab("https://x.com/Amittkumar_")}/>
                </span>
            </div>
        </div>
    )
}

export default Sidebar
