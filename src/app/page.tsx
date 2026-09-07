import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { OtherProjects } from '@/components/sections/OtherProjects';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col selection:bg-white/20 selection:text-white">
      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section with Fora Scroll Text Reveal */}
      <About />

      {/* Featured Projects with Stacking Cards */}
      <FeaturedProjects />

      {/* Additional Projects Carousel */}
      <OtherProjects />

      {/* Minimalist Editorial Footer */}
      <Footer />
    </main>
  );
}
