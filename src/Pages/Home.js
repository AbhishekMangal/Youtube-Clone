import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

export default function Home() {
  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height: "7.5vh"}}>

       <Navbar/>
      </div>
      <div className="flex" style={{height: "92.5vh"}}>
        <SideBar/>
      </div>
    </div>
  )
}
