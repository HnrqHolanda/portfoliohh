import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const projetos = [
  {
    nome: "Artemis",
    descricao:
      "Simulador interativo desenvolvido em Unity que projeta alvos virtuais em uma parede. Utiliza um script em Python com OpenCV para detectar disparos feitos com um apontador laser, identificando em tempo real se o tiro acertou ou não um dos alvos.",
    imagem: "/images/Artemis.png",
    github: null,
  },
  {
    nome: "Estoque - IME",
    descricao:
      "Aplicação web feita com React e Firebase para controle de estoque de uma seção de materiais, semelhante a um sistema de biblioteca. Permite que administradores visualizem o estoque disponível e os itens que foram cautelados pelos usuários",
    imagem: "/images/estoquetreino17.png",
    github: "https://github.com/HnrqHolanda/EstoqueTreino",
  },
  {
    nome: "StockAdvisor",
    descricao:
      "Aplicação web que monitora ativos da B3 em tempo real, exibindo cotações e gráficos atualizados. Com base em regras configuráveis, o sistema envia alertas por e-mail para indicar os melhores momentos para compra ou venda, auxiliando o usuário na tomada de decisões.",
    imagem: "/images/stck17.png",
    github: "https://github.com/HnrqHolanda/stockAdvisor",
  },
  {
    nome: "Jogo da Cobrinha",
    descricao:
      "Clássico jogo da cobrinha feito utilizando a biblioteca turtle graphics do python. Projeto feito durante o curso: The Python Pro Bootcamp, 100 days of code.",
    imagem: "/images/snakegame.png",
    github: "https://github.com/HnrqHolanda/SnakeGame",
  },
];

export default function ProjetosSection() {
  const [loadedCards, setLoadedCards] = useState([]);

  useEffect(() => {
    const timeouts = projetos.map((_, i) =>
      setTimeout(() => {
        setLoadedCards((prev) => [...prev, i]);
      }, i * 200)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="px-6 md:px-45 pt-20 text-white text-center relative z-10 h-full">
      <h2 className="text-5xl font-bold mt-2 mb-16">
        Projetos <span className="text-cyan-400">Recentes</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        {projetos.map((projeto, idx) => {
          const isVisible = loadedCards.includes(idx);

          return (
            <div
              key={idx}
              className={`bg-[#1c1c3a]/60 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-cyan-500/10 hover:shadow-cyan-500/30
                transition-all duration-700 ease-out w-full max-w-[750px] max-h-[1000px] flex flex-col justify-between
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ willChange: "opacity, transform" }}
            >
              {/* Imagem */}
              <div className="w-full aspect-[16/9] mb-4 relative overflow-hidden rounded-lg bg-[#2a2a4a]">
                <Image
                  src={projeto.imagem}
                  alt={projeto.nome}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{projeto.nome}</h3>
              <p className="text-sm text-gray-300 mb-4">{projeto.descricao}</p>

              <div className="flex justify-center gap-4 mt-auto">
                  {projeto.github ? (
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 border border-cyan-500 text-cyan-300 rounded hover:bg-cyan-600 hover:text-white transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : (
                    <div className="text-sm px-3 py-1 text-gray-400 border border-gray-500 rounded italic">
                      Repositório privado ou indisponível
                    </div>
                  )}
                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



