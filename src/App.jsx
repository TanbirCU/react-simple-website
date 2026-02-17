import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AddPost from './pages/AddPost.jsx'
import PostList from './pages/PostList.jsx'
import EditPost from './pages/EditPost.jsx'

import './App.css'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post-list" element={<PostList />} />
          <Route path="/post-edit/:id" element={<EditPost  />} />

        </Routes>

        <Footer />
    </>
  )
}

export default App
