import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
// import Skills from "./components/Skills"
// import About from "./components/About"
// import Footer from "./components/Footer"
// // import Connect from "./components/Connect"
// import Projects from "./components/Projects"

function App() {

  return (
    <>
      <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center overflow-scroll">
        <div className="w-[90%] h-[90%] bg-neutral-900 flex items-cente absoluter">
          <Outlet />
          <Sidebar />
        </div>
      </div>
    </>
  )
}

// leave a message - later
// profile
// aboutme 
// experience
// projects
// blogs
// skills
// contact
// connect
// footer

export default App
