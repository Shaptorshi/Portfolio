import React from 'react'
import { motion } from 'framer-motion'
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
  {
    title:"Token Swap DApp",
    description:"Built a decentralized token swap application allowing users to exchange tokens via smart contracts.",
    tech:"Solidity • Hardhat • ethers.js • Metamask Connection ",
    github:"https://github.com/Shaptorshi/Token-Swap-DApp"
  }
]

const projects = () => {
  return (
    <div id='projects'>
      <motion.section className='py-32' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className='samurai-font text-4xl font-bold text-gray-900 text-center'>Projects</h2>

        <p className='cascadia text-gray-600 text-center mt-4 mx-auto'>A selection of projects where I applied full-stack development principles to build scalable and user-friendly applications</p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {proj.map((project, idx) => {
            return (
              <motion.div whileHover={{scale:1.03}} transition={{duration:0.4}} key={idx} className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl'>
                <h3 className='samurai-font text-xl font-semibold text-gray-800'>{project.title}</h3>
                <p className='cascadia text-gray-600 mt-3 text-sm'>{project.description}</p>
                <p className='cascadia text-gray-500 text-sm mt-3'>{project.tech}</p>
                <div className='cascadia flex gap-4 mt-5'>
                  <a href={project.website} target="_blank"className='text-amber-600 font-medium hover:underline'>Website</a>
                  <a href={project.github} target="_blank"className='cascadia text-gray-600 font-medium hover:underline '>Github</a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default projects
