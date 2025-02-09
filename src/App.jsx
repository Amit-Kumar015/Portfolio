import React from "react"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import About from "./components/About"
import Footer from "./components/Footer"
import Connect from "./components/Connect"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <div className="flex justify-center">
        <div>
          <Profile />
          <About/>
          <Skills />
          <Footer/>
          <Projects/>
          {/* <Connect/> */}
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
