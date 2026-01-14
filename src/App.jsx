import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './pages/Blog';

function HomePage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <BrandLogos />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
