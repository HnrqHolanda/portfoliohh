import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0c0c28]/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-widest drop-shadow-md">
          HH<span className="text-cyan-400">.</span>
        </div>

        {/* Navegação */}
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-lg font-medium text-white mt-2 sm:mt-0">
          <Link href="/" className="flex items-center hover:text-cyan-400 transition">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link href="/experiencia" className="flex items-center hover:text-cyan-400 transition">
            <FaUser className="mr-1" /> Experiência
          </Link>
          <Link href="/projetos" className="flex items-center hover:text-cyan-400 transition">
            <FaProjectDiagram className="mr-1" /> Projetos
          </Link>
        </nav>
      </div>
    </header>
  );
}





