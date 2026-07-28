import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Contacts = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      id="contacts"
      className='py-20 max-w-4xl mx-auto px-6 text-center'
    >
      <h2 className='font-heading text-4xl font-bold text-stone-900'>Contact</h2>
      <div className='w-12 h-0.5 bg-accent mx-auto mt-4' />

      <p className='text-stone-500 mt-6 leading-relaxed'>
        I'm always open to discussing new opportunities, collaborations, or interesting projects. Feel free to reach out.
      </p>

      <div className='flex justify-center gap-6 mt-10'>
        {[
          { href: "mailto:shaptorshib@gmail.com", icon: <FiMail size={24} />, label: "Email" },
          { href: "https://www.linkedin.com/in/shaptorshi", icon: <FiLinkedin size={24} />, label: "LinkedIn" },
          { href: "https://github.com/Shaptorshi", icon: <FiGithub size={24} />, label: "GitHub" }
        ].map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target='_blank'
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className='text-stone-400 hover:text-accent transition-colors duration-300 p-3 rounded-xl hover:bg-accent-bg'
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <p className='mt-8 text-stone-400 text-sm'>
        Let's build something great together 🚀
      </p>
    </motion.section>
  )
}

export default Contacts
