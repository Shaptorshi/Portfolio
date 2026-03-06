import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const e = [
  {
    course: "Bachelor of Computer Applications(BCA)",
    college: "Brainware University",
    duration: "Aug 2021 - July 2024",
    location: "Kolkata, West Bengal, India"
  },
  {
    course: "Master of Computer Applications(MCA)",
    college: "Brainware University",
    duration: `Aug 2024 - ${new Date().getFullYear()}`,
    location: "Kolkata, West Bengal, India"
  },
  {
    course: "Commerce",
    college: "Sri Aurobindo Institute of Education",
    duration: "April 2020 - March 2021",
    location: "Kolkata, West Bengal, India"
  }
]

const education = () => {
  return (
    <div id='education' className='mb-60 py-28'>
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className='samurai-font text-4xl font-bold text-gray-900 text-center'>Education</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {e.map((education, idx) => {
            return (
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} key={idx} className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl'>
                <h3 className='samurai-font text-xl font-semibold mb-3 text-gray-800'>{education.course}</h3>
                <h4 className='cascadia text-sm text-gray-600 mb-3'>{education.college}</h4>
                <p className='cascadia text-sm text-gray-600'>{education.duration}</p>
                <div className='flex items-center cascadia text-sm text-gray-600 mt-3 gap-1.5'> 
                  <MapPin size={16}/>
                  <p >{education.location}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default education
