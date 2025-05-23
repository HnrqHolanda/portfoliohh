import Image from "next/image";
import HeroText from "./Herotext";
import perfil_img from "../../public/images/Henrique2.jpeg";
import { useEffect, useState } from "react";

export default function Content1() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-20 text-white transform transition-all duration-1000 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Imagem */}
      <div className="relative">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_40px_10px_rgba(168,85,247,0.4)] transition duration-300">
          <Image
            src={perfil_img}
            alt="Foto de perfil"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Olá! eu me chamo{" "}
          <span className="relative inline-block">
            <span className="text-cyan-400">Henrique Holanda</span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-500 blur-sm opacity-70" />
          </span>
        </h1>
        <HeroText />
        <p className="text-2xl font-light underline underline-offset-4 decoration-cyan-600">
          Sou estudante de Engenharia da Computação no Instituto Militar de Engenharia (IME), <br />
          entusiasmado em aprender novas ferramentas e implementar soluções para problemas reais.
        </p>
      </div>
    </div>
  );
}
