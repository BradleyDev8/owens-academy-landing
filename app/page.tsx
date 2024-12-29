import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Schedule from '@/components/schedule';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
}