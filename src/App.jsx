import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Socials from './components/Socials'

function App() {

  return (
    <>
      <div class="my-20 md:my-25 2xl:my-30 mx-7 md:mx-10 lg:mx-30 2xl:mx-90 w-auto">
        <div class="md:relative md:size-full">
          <div class="md:fixed md:w-xs xl:w-md">
            <Intro />
            <Navbar />
            <Socials />
          </div>

          <div class="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
            <About />
            <Education />
            <Projects />
            <Experience />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
