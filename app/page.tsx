import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Testimonials from './components/Testimonials';
import { Providers } from './providers';


export default function Home() {
  return (
    <Providers>
      <main className="pt-16">
        <LoadingScreen />
        <Profile />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </Providers>
  );
}
