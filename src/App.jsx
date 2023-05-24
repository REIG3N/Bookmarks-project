import { useState } from 'react'
import Navbar from './Navbar';
import MyBooks from './pages/MyBooks';
import MyDiary from './pages/MyDiary';
import Community from './pages/Community';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css'; 

export default function App() {
  return (
    <>
      <Navbar />
      <hr />
      <div className="container">
        <Routes>
          <Route path='/mybooks' element={<MyBooks />} />
          <Route path='/mydiary' element={<MyDiary />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </div>
      <hr />
    </>
  )
}