import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      className="py-20"
      id='about'
    >
      <h2 className="font-heading text-4xl font-bold text-stone-900 text-center">About Me</h2>
      <div className='w-12 h-0.5 bg-accent mx-auto mt-4' />

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-stone-500 leading-relaxed">
          <p>
            My journey into software development started with curiosity about how modern web applications work behind the scenes. Over time, that curiosity turned into a passion for building real-world applications.
          </p>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="bg-warm-surface border border-stone-200 p-8 rounded-xl hover:border-accent-light hover:shadow-md transition-all duration-300"
        >
          <h3 className="font-heading text-lg font-semibold text-stone-900 mb-4">Technologies I Work With</h3>
          <p className="font-mono text-sm text-stone-400 leading-relaxed">React · Node.js · Express · MongoDB · Redis · JWT · Tailwind</p>

          <h3 className="font-heading text-lg font-semibold text-stone-900 mt-8 mb-4">What I Enjoy Building</h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            Full Stack Web Apps, scalable backend APIs, and developer tools.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
