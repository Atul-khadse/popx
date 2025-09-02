import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="pt-16 px-4">
      <h2 className="text-xl font-semibold">Create account</h2>
      <p className="text-gray-500 text-sm mt-1">Join us in a minute.</p>

      <form className="mt-6 space-y-5">
        <div className="relative">
          <input
            type="text"
            id="fullname"
            placeholder=" "
            className="peer w-full  border bg-white border-gray-400 rounded-xl px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
          <label
            htmlFor="fullname"
            className="absolute left-3 p-1 bg-white -top-3 text-xs text-violet-500  peer-placeholder-shown:text-sm peer-placeholder-shown:text-violet-700 transition-all"
          >
            Full Name
          </label>
        </div>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            placeholder=" "
            className="peer w-full border bg-white border-gray-400 rounded-xl px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
          <label
            htmlFor="phone"
            className="absolute left-3 p-1 bg-white -top-3 text-xs text-violet-700  peer-placeholder-shown:text-sm peer-placeholder-shown:text-violet-700 transition-all"
          >
            Phone Number
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer w-full border bg-white border-gray-400 rounded-xl px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-3 p-1 bg-white text-violet-700  peer-placeholder-shown:text-sm peer-placeholder-shown:text-violet-700 transition-all"
          >
            Email Address
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="password"
            placeholder=" "
            className="peer w-full border border-gray-400 bg-white rounded-xl px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
          <label
            htmlFor="password"
            className="absolute left-3 bg-white -top-3 p-1 text-xs text-violet-700  peer-placeholder-shown:text-sm peer-placeholder-shown:text-violet-700 transition-all"
          >
            Password
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="company"
            placeholder=" "
            className="peer w-full border border-gray-400 bg-white rounded-xl px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
          />
          <label
            htmlFor="company"
            className="absolute left-3 bg-white p-1 -top-3 text-xs text-violet-700  peer-placeholder-shown:text-sm peer-placeholder-shown:text-violet-700 "
          >
            Company Name
          </label>
        </div>
        <div className='pb-32'>
          <p className="text-sm text-gray-600 mb-2">Are you an Agency?</p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="violet-800"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                className="violet-800"
              />
              <span>No</span>
            </label>
          </div>
        </div>

          
        <Link to="/profile"
          className="w-full bg-purple-800 text-white rounded-xl py-2 shadow-soft flex justify-center items-center"
        >
          Create account
        </Link>
      </form>
    </div>
  )
}
