import React from 'react'

const navbar = () => {
    return (
        <nav className='samurai-font text-2xl bg-amber-500 shadow-md sticky top-0 z-50 rounded-2xl p-2'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6 text-gray-900 font-semibold'>
                <h1>Portfolio</h1>
                <ul className='flex gap-8 text-gray-900'>
                    <li className='hover:text-white transition duration-300 cursor-pointer'>Home</li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'>Projects</li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'>Contacts</li>
                    <li className='hover:text-white transition duration-300 cursor-pointer'>About</li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar