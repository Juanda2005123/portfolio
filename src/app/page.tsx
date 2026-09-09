import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { OtherProjects } from '@/components/sections/OtherProjects';
import { Experience } from '@/components/sections/Experience';
import { TechStack } from '@/components/sections/TechStack';
import { ContactCTA } from '@/components/sections/ContactCTA';

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

      {/* Unified Experience & Education Section with Toggle Switch */}
      <Experience />

      {/* Interactive Bento Grid Tech Stack & Skills with Project Bridge */}
      <TechStack />

      {/* Final Closing Call-to-Action with Fora Sand Dunes & Developer Card */}
      <ContactCTA />
    </main>
  );
}
