import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router';

function Sidebar() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    const navigate = useNavigate()
    const location = useLocation()

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-[10%] bg-neutral-900 fixed right-6 top-48">
            <div className="w-full text-white flex flex-col items-center justify-center py-5 gap-5">
                {[
                    { path: "/", Icon: IoMdHome },
                    { path: "/about", Icon: IoPersonSharp },
                    { path: "/projects", Icon: MdOutlineWorkOutline },
                    { path: "/mail", Icon: IoIosMail },
                ].map(({ path, Icon }) => (
                    <span
                        key={path}
                        className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300
                        ${isActive(path) ? "bg-white text-black" : "bg-neutral-600 text-white hover:bg-white hover:text-black"}`}
                        onClick={() => navigate(path)}
                    >
                        <Icon className="text-2xl" />
                    </span>
                ))}

                {[
                    { url: "https://www.linkedin.com/in/amit-kumar-0b47ba200/", Icon: FaLinkedin },
                    { url: "https://github.com/Amit-Kumar015", Icon: FaGithub },
                    { url: "https://x.com/Amittkumar_", Icon: FaSquareXTwitter },
                ].map(({ url, Icon }) => (
                    <span
                        key={url}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-600 text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
                        onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
                    >
                        <Icon className="text-2xl" />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
