import React from 'react'
import { motion } from 'framer-motion'

const hero = () => {
  return (
    <motion.section className="text-center py-32 px-6 overflow-hidden" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className='cascadia absolute text-[18vw] left-1/2 -translate-x-1/2 bg-outline select-none pointer-events-none z-0 max-w-580'>DEVELOPER</div>
      <div className='relative z-10'>
        <p className='cascadia text-sm text-gray-500 tracking-widest uppercase'>Welcome to my portfolio</p>
        <h1 className='samurai-font mt-4 text-6xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text'>Hi, I'm Shaptorshi👋</h1>

        <p className='cascadia mt-8 text-xl text-gray-700'>Full Stack Developer building modern web applications.</p>
        <p className='cascadia mt-4 text-lg text-gray-600'>I enjoy building fast, scalable, and user-focused web applications.</p>
        <p className='cascadia mt-4 text-lg text-gray-500'>
          React • Node.js • Express • MongoDB
        </p>
      </div>
    </motion.section>
  )
}

export default hero