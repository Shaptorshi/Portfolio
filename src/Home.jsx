import About from './components/about'
import Navbar from './components/navbar'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Projects from './components/projects'
import Hero from './components/hero'

const Home = () => {
  return (
    <div id='home' className='max-w-350 px-6 py-20 mx-auto space-y-32'>
     <Navbar />
     <Hero />
     <Projects/>
     <About />
     <Contacts />
     <Footer />
    </div>
  )
}

export default Home
