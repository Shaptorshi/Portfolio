import React from 'react'

const footer = () => {
  return (
    <footer className='border-t border-gray-200 py-6 mt-20'>
      <div className='max-w-full mx-auto px-6 text-gray-600 text-sm'>
        <div className='flex justify-between items-center'>
          <p className='cascadia'>
            © {new Date().getFullYear()}
            <span className='cascadia font-semibold text-gray-800'> Shaptorshi Bhattacharya</span>
          </p>
          <p className='cascadia'>
            Built with React & Tailwind CSS
          </p>
        </div>
        <p className='cascadia text-center text-gray-500 text-sm mt-3 italic'>
          Designed & Developed by Shaptorshi
        </p>
      </div>
    </footer>
  )
}

export default footer
