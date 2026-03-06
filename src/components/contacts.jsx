import {FiMail,FiGithub,FiLinkedin} from 'react-icons/fi'
import {motion} from 'framer-motion'

const contacts = () => {
  return (
    <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
    transition={{duration:0.7}} id="contacts"className='py-28 max-w-4xl mx-auto px-6 text-center'>
      <h2 className='samurai-font mb-4 text-4xl font-bold text-gray-900 border-b border-gray-200'>
        Contact
      </h2>
      <p className='cascadia text-gray-600'>I'm always open to discussing new opportunities, collaborations, or interesting projects. Feel free to reach out.</p>

      <div className='flex justify-center gap-8 mt-10'>
        <p>
          <a href="mailto:shaptorshib@gmail.com" target='_blank' className='text-amber-600 font-medium hover:underline'><FiMail size={30}/></a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/shaptorshi" target='_blank' className='text-amber-600 font-medium hover:underline'><FiLinkedin size={30}/></a>
        </p>
        <p>
          <a href="https://github.com/Shaptorshi" target='_blank' className='text-amber-600 font-medium hover:underline'>
            <FiGithub size={30}/>
          </a>
        </p>
      </div>
      <p className='cascadia mt-6 text-gray-500'>
        Let's build something great together 🚀
      </p>
    </motion.section>
  )
}

export default contacts
