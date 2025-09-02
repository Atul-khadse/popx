import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="pt-16 px-4">
      <h2 className="text-xl font-semibold">Sign in</h2>
      <p className="text-gray-500 text-sm mt-1">Welcome back! Please enter your details.</p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input type="password" className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-brand-600 text-white rounded-xl py-2 shadow-soft">Continue</button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-600">
        No account? <Link to="/signup" className="text-brand-600 font-medium">Sign up</Link>
      </p>
    </div>
  )
}
