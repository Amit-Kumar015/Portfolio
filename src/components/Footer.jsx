import React from 'react'
import { FaGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    const openInNewTab = (url) => {
        window.open(URL, "_blank", "noopener,noreferrer")
    }

    return (
        <div>
            <hr />
            <div className='flex justify-center gap-5 bg-amber-100'>
                <span onClick={() => openInNewTab("https://github.com/Amit-Kumar015")}>
                    <FaGithub className='inline'/>
                    Github
                </span>
                <span onClick={() => openInNewTab("https://www.linkedin.com/in/amit-kumar-0b47ba200/")}>
                    <FaLinkedin className='inline'/>
                    LinkedIn
                </span>
                <span onClick={() => openInNewTab("https://x.com/Amittkumar_")}>
                    <FaSquareXTwitter className='inline'/>
                    Twitter
                </span>
                <span onClick={() => openInNewTab("mailto:amitk200415@gmail.com")}>
                    <MdOutlineEmail className='inline'/>
                    Email
                </span>
            </div>
        </div>
    )
}

export default Footer