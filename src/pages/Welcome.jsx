import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <div className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-6 px-4">
        <div className="text-center w-full">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
          <p className="text-gray-600 mt-2">
            Pixel-perfect mobile interface, centered on the page.
          </p>
        </div>
        <Link to="/signup" className="w-full px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-400 text-white shadow-soft text-center">Create Account</Link>
        <Link to="/login" className="w-full px-4 py-2 rounded-xl border bg-emerald-200 hover:bg-emerald-500 text-white border-gray-200 text-center">Already Registered? Login</Link>
      </div>
    </div>
  )
}