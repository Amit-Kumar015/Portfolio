import React from 'react'
import { FaGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Connect() {
    const openInNewTab = (url) => {
        window.open(URL, "_blank", "noopener,noreferrer")
    }

  return (
    <div className='w-screen flex justify-center items-center sticky bottom-0 z-10'>
        <div className='flex rounded-xl gap-3 bg-blue-200 max-w-sm'>
            <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015")}><FaGithub/></span>
            <span onClick={() => openInNewTab("https://www.linkedin.com/in/amit-kumar-0b47ba200/")}><FaLinkedin/></span>
            <span onClick={() => openInNewTab("https://x.com/Amittkumar_")}><FaSquareXTwitter/></span>
            <span onClick={() => openInNewTab("mailto:amitk200415@gmail.com")}><MdOutlineEmail/></span>
        </div>
    </div>
  )
}

export default Connect

