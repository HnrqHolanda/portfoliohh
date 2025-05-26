import Image from "next/image";
import { useEffect, useState } from "react";

export default function InfoCard({ logo, title, description }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`bg-[#1c1c3a]/60 backdrop-blur-lg p-4 rounded-lg shadow-md border border-cyan-500/10 flex items-center gap-4 max-w-[600px] min-h-[160px] 
        transition-all duration-1000 ease-out transform 
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        hover:scale-105 hover:shadow-cyan-500/20`}
    >
      {/* Logo com tamanho fixo e borda arredondada */}
      <div className="relative w-40 h-40 shrink-0 overflow-hidden">
        <Image src={logo} alt={title} fill className="object-contain" />
      </div>

      {/* Conteúdo alinhado verticalmente */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}


