import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold">FLUTTER<span className="text-primary">.DEV</span></a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 md:inline-block">Hire Me</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Built with love and Flutter expertise.</footer>
    </div>
  );
}
