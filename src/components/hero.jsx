import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      className="text-center py-28 md:py-36 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='text-sm text-stone-400 tracking-[0.2em] uppercase font-medium'
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className='font-heading mt-6 text-5xl md:text-7xl font-bold text-stone-900 leading-tight'
      >
        Hi, I'm Shaptorshi
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className='font-heading mt-3 text-3xl md:text-5xl font-semibold text-stone-700'
      >
        Full Stack Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className='mt-6 text-lg text-stone-500 max-w-xl mx-auto leading-relaxed'
      >
        I enjoy building fast, scalable, and user-focused web applications.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='font-mono mt-4 text-sm text-stone-400'
      >
        React · Node.js · Express · MongoDB
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='mt-12 flex items-center justify-center gap-4 flex-wrap'
      >
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          href="https://drive.google.com/file/d/1SuH6PH-4u_AFhHK2sqh_royR6eWdeki5/view?usp=sharing"
          target="_blank"
          className='bg-accent text-white px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-accent-dark transition-colors duration-300 shadow-sm'
        >
          Download Resume
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          href="https://github.com/Shaptorshi"
          target='_blank'
          className='border border-stone-300 text-stone-600 px-8 py-3.5 rounded-xl font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300'
        >
          View Github
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

export default Hero