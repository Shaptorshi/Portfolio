import { motion } from 'framer-motion'

const s = [
  {
    title: "CS Fundamentals",
    lang: "DSA · OOPs · DBMS"
  },
  {
    title: "Programming Languages",
    lang: "C · Java · JavaScript · TypeScript",
  },
  {
    title: "Frontend",
    lang: "React.js · TailwindCSS",
  },
  {
    title: "Backend",
    lang: "Node.js · Express.js · REST APIs · JWT"
  },
  {
    title: "Developer Tools",
    lang: "Git · GitHub · Postman · VS Code"
  }
]

const Skills = () => {
  return (
    <div id='skills' className='py-20'>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='font-heading text-4xl font-bold text-stone-900 text-center'>Skills</h2>
        <div className='w-12 h-0.5 bg-accent mx-auto mt-4' />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {s.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className='bg-warm-surface border border-stone-200 p-6 rounded-xl hover:border-accent-light hover:shadow-md transition-all duration-300'
            >
              <h3 className='font-heading font-semibold text-lg text-stone-900'>{skill.title}</h3>
              <p className='font-mono mt-3 text-sm text-stone-400'>{skill.lang}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Skills
