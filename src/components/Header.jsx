import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll ativo")
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo estilizado */}
        <div className="text-3xl font-extrabold text-cyan-400 tracking-widest drop-shadow-md">
          HH<span className="text-cyan-400">.</span>
        </div>

        {/* Menu de navegação */}
        <nav className="flex space-x-6 text-white text-lg font-medium">
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




