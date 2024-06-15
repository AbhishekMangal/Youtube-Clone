import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Watch from './Pages/Watch'
import PageNOtFound from './Pages/PageNOtFound'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
    
        <Routes>
          
          <Route path ="/" element={<Home/>} />       
          <Route path ="/search" element={<Search/>} />       
          <Route path ="/watch/:id" element={<Watch/>} />       
          <Route path ="*" element={<PageNOtFound/>} />       
           </Routes>
      </BrowserRouter>
    </div>
  )
}
