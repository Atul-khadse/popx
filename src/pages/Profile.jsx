import React from 'react'

export default function Profile() {
  return (
    <div className="pt-14 px-4">
      <div className='tracking-tight font-semibold border-b pb-3 border-gray-200'>
        <h2 className="text-xl font-semibold">Account Settings</h2>
      </div>
      

      <div className="mt-6 space-y-3">
        <div className="p-4">
          <div className="flex items-center gap-3 ">
            <div className="w-12 h-12 rounded-full bg-brand-200" />
            <div>
              <div className="font-medium">Atul Khadse</div>
              <div className="text-sm text-gray-500">you@example.com</div>
            </div>
          </div>
           <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
      </div>
    </div>
  )
}
