import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

const navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1.2 }} className='samurai-font text-2xl bg-amber-500 shadow-md sticky top-0 z-50 rounded-2xl p-2'>
            <div className='max-w-full mx-auto flex justify-between items-center py-4 px-6 text-gray-900 font-semibold'>
                <h1>Portfolio</h1>
                <ul className='hidden lg:flex gap-6 lg:gap-8 text-gray-900 items-center text-xl'>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#home">Home</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#projects">Projects</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#exp">Experience</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#skills">Skills</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#education">Education</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#contacts">Contacts</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#about">About</a></li>
                </ul>
                <button className='lg:hidden' onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>


            </div>
            <AnimatePresence>
                {open &&
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className='absolute right-6 top-16 w-56 bg-amber-10000 backdrop-blur-xl border border-white rounded-xl p-4'>

                        <ul className='samurai-font flex flex-col gap-4 mt-4 md:hidden'>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#home">Home</a></li>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#projects">Projects</a></li>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#exp">Experience</a></li>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#skills">Skills</a></li>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#education">Education</a></li>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#contacts">Contacts</a></li>
                            <li className='hover:text-orange-400 transition duration-300 cursor-pointer'><a href="#about">About</a></li>
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.nav>
    )
}

export default navbar