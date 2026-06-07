import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import LittleWins from './components/LittleWins';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-[1px] bg-sage-dark/25 w-full"></div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-text-dark selection:bg-sage-main selection:text-text-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <LittleWins />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
