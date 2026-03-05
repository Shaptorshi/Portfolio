import React from 'react'

const proj = [
  {
    title: "Doctor Booking System",
    description: "A full stack platform where users can book doctor appointments with authentication and scheduling.",
    tech: "React • Node • Express • MongoDB",
    website: "https://doctor-booking-omega.vercel.app",
    github: "https://github.com/Shaptorshi/Doctor-Booking"
  },
  {
    title: "URL Shortener",
    description: "A MERN stack application that generates short URLs and tracks usage.",
    tech: "React • Node • Express • MongoDB • Redis • JWT",
    website: "https://linktrim-smoky.vercel.app/",
    github: "https://github.com/Shaptorshi/URL-Shortener"
  },
]

const projects = () => {
  return (
    <div className='py-28'>
      <h2 className='samurai-font text-4xl font-bold text-gray-900 text-center'>Projects</h2>

      <p className='cascadia text-gray-600 text-center mt-4 mx-auto'>A selection of projects where I applied full-stack development principles to build scalable and user-friendly applications</p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
        {proj.map((project, idx) => {
          return (
            <div key={idx} className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition'>
              <h3 className='samurai-font text-xl font-semibold text-gray-800'>{project.title}</h3>
              <p className='cascadia text-gray-600 mt-3 text-sm'>{project.description}</p>
              <p className='cascadia text-gray-500 text-sm mt-3'>{project.tech}</p>
              <div className='cascadia flex gap-4 mt-5'>
                <a href={project.website} className='text-amber-600 font-medium hover:underline'>Website</a>
                <a href={project.github} className='cascadia text-gray-600 font-medium hover:underline '>Github</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default projects
