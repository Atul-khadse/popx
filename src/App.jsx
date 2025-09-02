import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'

const PageWrapper = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="device-bezel"
    >
      <div className="notch"></div>
      {children}
    </motion.div>
  </AnimatePresence>
)



export default function App() {
  return (
    <div className="min-h-full flex items-center justify-center p-6">
      <div className="device relative">
        <Routes>
          <Route path="/" element={<PageWrapper><Welcome /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
          <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
          <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
        </Routes>
      
      </div>
    </div>
  )
}
