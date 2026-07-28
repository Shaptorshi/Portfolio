import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const e = [
  {
    course: "Master of Computer Applications (MCA)",
    college: "Brainware University",
    duration: `Aug 2024 - ${new Date().getFullYear()}`,
    location: "Kolkata, West Bengal, India"
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    college: "Brainware University",
    duration: "Aug 2021 - July 2024",
    location: "Kolkata, West Bengal, India"
  },
  {
    course: "Commerce, Class XII (ISC)",
    college: "Sri Aurobindo Institute of Education",
    duration: "April 2020 - March 2021",
    location: "Kolkata, West Bengal, India"
  },
  {
    course: "Class X (ICSE)",
    college: "Sri Aurobindo Institute of Education",
    duration: "April 2018 - March 2019",
    location: "Kolkata, West Bengal, India"
  }
]

const Education = () => {
  return (
    <div id='education' className='py-20'>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='font-heading text-4xl font-bold text-stone-900 text-center'>Education</h2>
        <div className='w-12 h-0.5 bg-accent mx-auto mt-4' />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {e.map((education, idx) => (
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              key={idx}
              className='bg-warm-surface border border-stone-200 p-6 rounded-xl hover:border-accent-light hover:shadow-md transition-all duration-300'
            >
              <h3 className='font-heading text-lg font-semibold text-stone-900'>{education.course}</h3>
              <p className='text-sm text-stone-500 mt-2'>{education.college}</p>
              <p className='font-mono text-xs text-stone-400 mt-3'>{education.duration}</p>
              <div className='flex items-center text-xs text-stone-400 mt-2 gap-1.5'>
                <MapPin size={14} />
                <p>{education.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Education
