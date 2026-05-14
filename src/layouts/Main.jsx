import React from 'react'

export default function Main({ sidebarOpen, setSidebarOpen }) {
  return (
    <main
      className={
        `${sidebarOpen ? "w-[calc(100%-250px)] md:w-[calc(100%-290px)]" : "w-full md:w-[calc(100%-60px)]!"}
      min-h-screen absolute left-0 bg-purple-900 transition-all ease-in-out`}>
      <div className="w-full h-20 bg-purple-800">

        <button
          className="text-white"
          onClick={() => setSidebarOpen(prev => !prev)}>
          close side bar
        </button>

      </div>



    </main>
  )
}
