import './index.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Demo from './components/sections/Demo'
import Languages from './components/sections/Languages'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <div id="nav-sentinel" />
      <Hero />
      <Features />
      <Demo />
      <Languages />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  )
}
