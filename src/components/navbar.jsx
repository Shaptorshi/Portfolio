import {motion} from 'framer-motion'

const navbar = () => {
    return (
        <motion.nav initial={{y:-100}} animate={{y:0}} transition={{duration:1.2}}className='samurai-font text-2xl bg-amber-500 shadow-md sticky top-0 z-50 rounded-2xl p-2'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6 text-gray-900 font-semibold'>
                <h1>Portfolio</h1>
                <ul className='flex gap-8 text-gray-900'>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#home">Home</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#projects">Projects</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#contacts">Contacts</a></li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'><a href="#about">About</a></li>
                </ul>
            </div>
        </motion.nav>
    )
}

export default navbar