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
      <div class="my-30 mx-90 w-auto">
        <div class="relative size-full">
          <div class="fixed w-md">
            <Intro />
            <Navbar />
            <Socials />
          </div>

          <div class="absolute inset-y-0 right-0 w-1/2">
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
