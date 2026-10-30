import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Schedule from '@/components/schedule';
import ImageGallery from '@/components/ImageGallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <ImageGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
