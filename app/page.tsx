import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
