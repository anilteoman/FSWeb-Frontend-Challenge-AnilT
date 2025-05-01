

import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {


  return (
    <>
      <LanguageProvider>
      <Header/>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
