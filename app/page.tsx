import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative w-full">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
