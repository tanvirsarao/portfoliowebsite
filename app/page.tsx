import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Providers } from './providers';
import LoadingScreen from './components/LoadingScreen';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <Providers>
      <main className="pt-16">
        <LoadingScreen />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </Providers>
  );
}
