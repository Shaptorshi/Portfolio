import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='bg-warm-bg/80 backdrop-blur-xl border border-stone-200 sticky top-4 z-50 rounded-2xl shadow-sm'
    >
      <div className='max-w-full mx-auto flex justify-between items-center py-3.5 px-6'>
        <a href="#home" className='font-heading text-xl font-semibold text-stone-800 hover:text-accent transition-colors duration-300'>
          Shaptorshi
        </a>

        <ul className='hidden lg:flex gap-8 items-center text-[15px] font-medium'>
          {['Home', 'Projects', 'Experience', 'Skills', 'Education', 'Contact', 'About'].map((item) => (
            <li key={item}>
              <a
                href={`#${item === 'Contact' ? 'contacts' : item === 'Experience' ? 'exp' : item.toLowerCase()}`}
                className='text-stone-500 hover:text-accent transition-colors duration-300'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className='lg:hidden text-stone-600 hover:text-stone-900 transition-colors' onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className='absolute right-4 top-16 w-52 bg-warm-surface border border-stone-200 rounded-xl p-4 shadow-lg'
          >
            <ul className='flex flex-col gap-3 text-[15px] font-medium'>
              {['Home', 'Projects', 'Experience', 'Skills', 'Education', 'Contact', 'About'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === 'Contact' ? 'contacts' : item === 'Experience' ? 'exp' : item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className='text-stone-500 hover:text-accent transition-colors duration-300 block py-1'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar