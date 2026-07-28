import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-stone-200 py-8 mt-10'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm'>
          <p className='text-stone-400'>
            © {new Date().getFullYear()}
            <span className='font-medium text-stone-600'> Shaptorshi Bhattacharya</span>
          </p>
          <p className='font-mono text-xs text-stone-400'>
            React · Tailwind CSS · Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
