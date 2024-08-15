import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Flow from './components/flow/Flow'
import Donate from './components/donate/Donate'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Flow />
      <Donate />
      <Contact />
      <Footer />
    </>
  )
}

export default App
