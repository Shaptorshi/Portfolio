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

const exp = () => {
  return (
    <div id='exp' className='mb-60 py-28'>
      <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>

        <h2 className='samurai-font text-4xl font-bold text-gray-900 text-center border-b border-gray-200'>Experience</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {experiences.map((e, idx) => {
            return (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className='bg-white p-6 shadow-md hover:shadow-xl rounded-xl'>
                <h3 className='samurai-font text-xl font-semibold text-gray-800'>{e.title} | {e.comp_name}</h3>
                <p className='cascadia text-sm mt-3 text-gray-600'>{e.duration}</p>
                <p className='cascadia text-sm mt-3 text-gray-600'>{e.mode}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default exp
