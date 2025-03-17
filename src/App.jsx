import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

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

export default App
