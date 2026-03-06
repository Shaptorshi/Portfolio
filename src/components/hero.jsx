import React from 'react'
import { motion } from 'framer-motion'

const hero = () => {
  return (
    <motion.section className="text-center py-55 px-6 overflow-hidden" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className='cascadia absolute text-[18vw] left-1/2 -translate-x-1/2 bg-outline select-none pointer-events-none z-0 max-w-580'>DEVELOPER</div>
      <div className='z-10'>
        <p className='cascadia text-md text-gray-500 tracking-widest uppercase'>Welcome to my portfolio</p>
        <h1 className='samurai-font mt-4 text-6xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text'>Hi, I'm Shaptorshi</h1>

        <h2 className='samurai-font mt-4 text-6xl font-semibold text-gray-900'>Full Stack Developer </h2><p className='cascadia mt-4 text-lg font-semibold text-gray-600'>building modern web applications.</p>
        <p className='cascadia mt-4 text-lg text-gray-600'>I enjoy building fast, scalable, and user-focused web applications.</p>
        <p className='cascadia mt-4 text-lg text-gray-500'>
          React • Node.js • Express • MongoDB
        </p>
        <div className='mt-20 flex items-center justify-center gap-6' >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
            <a className='bg-gray-800 block text-white p-6 rounded-xl cascadia' target="_blank" href="https://drive.google.com/file/d/1SuH6PH-4u_AFhHK2sqh_royR6eWdeki5/view?usp=sharing" download={"SHAPTORSHI_BHATTACHARYA_RESUME.pdf"}>Download Resume</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }} className='border p-6 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-600 ease-in-out hover:scale-y-105 '>
            <a href="https://github.com/Shaptorshi" target='_blank' className='cascadia border-amber-400 px-3 block rounded-xl'>View Github</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default hero