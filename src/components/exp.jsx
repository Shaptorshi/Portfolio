import { motion } from 'framer-motion'

const experiences = [
  {
    comp_name: "LAUNCHED GLOBAL",
    title: "Web3 Developer Intern",
    mode: "Remote",
    duration: "June 2025 - July 2025"
  },
  {
    comp_name: "COGNIFYZ TECHNOLOGIES",
    title: "Full Stack Developer Intern",
    mode: "Remote",
    duration: "Aug 2025 - Sep 2025"
  }
]

const Experience = () => {
  return (
    <div id='exp' className='py-20'>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='font-heading text-4xl font-bold text-stone-900 text-center'>Experience</h2>
        <div className='w-12 h-0.5 bg-accent mx-auto mt-4' />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {experiences.map((e, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className='bg-warm-surface border border-stone-200 p-6 rounded-xl hover:border-accent-light hover:shadow-md transition-all duration-300'
            >
              <h3 className='font-heading text-lg font-semibold text-stone-900'>{e.title}</h3>
              <p className='font-medium text-stone-500 mt-1.5 text-sm'>{e.comp_name}</p>
              <div className='font-mono text-xs text-stone-400 mt-4 space-y-1'>
                <p>{e.duration}</p>
                <p>{e.mode}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Experience
