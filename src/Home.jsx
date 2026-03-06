import About from './components/about'
import Navbar from './components/navbar'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Projects from './components/projects'
import Hero from './components/hero'
import Experience from './components/exp'
import Skills from './components/skills'
import Education from './components/education'

const Home = () => {
  return (
    <div id='home'>
      <div className='max-w-460 px-6 py-10 mx-auto space-y-32'>
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <About />
        <Contacts />
      </div>
        <Footer />
    </div>
  )
}

export default Home
