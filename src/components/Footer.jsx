import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-0 bg-gradient-to-t from-[#0a0a23] via-[#121261] to-transparent text-white">
      {/* Seção social */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold">Redes Sociais</h2>
        <p className="text-sm text-gray-300">
          Fique a vontade para <span className="text-cyan-400">entrar em contato</span> 
        </p>

        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/HnrqHolanda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-cyan-500 p-3 rounded-full transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-holanda-72513b242/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-cyan-500 p-3 rounded-full transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/henriq_holanda/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-cyan-500 p-3 rounded-full transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Rodapé base */}
      <div className="border-t border-white/10 py-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6">
        <p className="mb-2 md:mb-0">
          Designed and Developed by <span className="text-white font-medium">Henrique Holanda</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} HH</p>
      </div>
    </footer>
  );
}
