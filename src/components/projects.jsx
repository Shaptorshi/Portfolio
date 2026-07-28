import React from 'react'
import { motion } from 'framer-motion'

const proj = [
  {
    title: "AI Share Trend Analyzer",
    description: "An AI-powered stock market analysis platform that provides share trend insights, technical indicator analysis, and AI-generated predictions using historical market data.",
    tech: "Next.js · React · TypeScript · FastAPI · Prisma · PostgreSQL · Ollama",
    website: "https://tradeedge-zeta.vercel.app/",
    github: "https://github.com/Shaptorshi/AI-Share-Trend-Analyser"
  },
  {
    title: "Parking Management System",
    description: "A web-based parking management system for finding available spots, reserving slots, and managing sessions with real-time availability updates and analytics.",
    tech: "Next.js · Prisma · PostgreSQL · NextAuth · OpenStreetMap",
    website: "https://parking-management-system-ebon.vercel.app",
    github: "https://github.com/Shaptorshi/Parking-Management-System"
  },
  {
    title: "Finance Tracker",
    description: "A full-stack personal finance tracker for managing income, expenses, and debts with category-based records, summaries, and data visualizations.",
    tech: "React · Node · Express · MongoDB · Redis · JWT",
    website: "https://finsense-lyart.vercel.app/",
    github: "https://github.com/Shaptorshi/Finance-Tracker"
  },
  {
    title: "Doctor Booking System",
    description: "A full stack platform where users can book doctor appointments with authentication and scheduling.",
    tech: "React · Node · Express · MongoDB",
    website: "https://doctor-booking-omega.vercel.app",
    github: "https://github.com/Shaptorshi/Doctor-Booking"
  },
  {
    title: "URL Shortener",
    description: "A MERN stack application that generates short URLs and tracks usage analytics.",
    tech: "React · Node · Express · MongoDB · Redis · JWT",
    website: "https://linktrim-smoky.vercel.app/",
    github: "https://github.com/Shaptorshi/URL-Shortener"
  },
  {
    title: "Token Swap DApp",
    description: "A decentralized token swap application allowing users to exchange tokens via smart contracts on the blockchain.",
    tech: "Solidity · Hardhat · ethers.js · Metamask",
    github: "https://github.com/Shaptorshi/Token-Swap-DApp"
  }
]

const Projects = () => {
  return (
    <div id='projects'>
      <motion.section
        className='py-20'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='font-heading text-4xl font-bold text-stone-900 text-center'>Projects</h2>
        <div className='w-12 h-0.5 bg-accent mx-auto mt-4' />

        <p className='text-stone-500 text-center mt-6 max-w-2xl mx-auto leading-relaxed'>
          A selection of projects where I applied full-stack development principles to build scalable and user-friendly applications.
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {proj.map((project, idx) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              key={idx}
              className='bg-warm-surface border border-stone-200 p-6 rounded-xl hover:border-accent-light hover:shadow-md transition-all duration-300 flex flex-col'
            >
              <h3 className='font-heading text-lg font-semibold text-stone-900'>{project.title}</h3>
              <p className='text-stone-500 mt-3 text-sm leading-relaxed flex-1'>{project.description}</p>
              <p className='font-mono text-stone-400 text-xs mt-4 leading-relaxed'>{project.tech}</p>
              <div className='flex gap-4 mt-5 text-sm font-medium'>
                {project.website && (
                  <a href={project.website} target="_blank" className='text-accent hover:text-accent-dark transition-colors duration-200'>
                    Live Demo →
                  </a>
                )}
                <a href={project.github} target="_blank" className='text-stone-400 hover:text-stone-600 transition-colors duration-200'>
                  Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Projects
