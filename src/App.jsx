import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <BrandLogos />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
