import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <MenuSection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
