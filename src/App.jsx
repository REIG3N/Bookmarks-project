import { useState } from 'react'
import Navbar from './Navbar';
import MyBooks from './pages/MyBooks';
import MyDiary from './pages/MyDiary';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css'; 

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/mybooks' element={<MyBooks />} />
          <Route path='/mydiary' element={<MyDiary />} />
        </Routes>
      </div>
    </>
  )
}