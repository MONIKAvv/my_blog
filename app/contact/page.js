import React from 'react'

export default function page() {
  return (
<div className="min-h-screen flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold text-center my-12 mb-10">
          Contact Me
        </h2>
      <div className="w-full max-w-2xl  p-8 rounded-2xl shadow-lg border-l-2 border-t-4 border-blue-500">
        <p className='text-2xl font-semibold mb-4'>Please Feel Free to Contact Me!</p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
