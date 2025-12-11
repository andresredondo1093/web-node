import { AnimatedBackground } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout';
import { Hero, Services, Contact } from '@/components/sections';
import { FloatingAssistant } from '@/components/assistant';

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
      <FloatingAssistant />
    </main>
  );
}
