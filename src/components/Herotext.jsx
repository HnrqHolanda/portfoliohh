import { Typewriter } from "react-simple-typewriter";

export default function HeroText() {
  return (
    <p className="text-5xl font-light text-white">
      <Typewriter
        words={["Estudante", "Desenvolvedor", "Entusiasta da Educação"]}
        loop={0} // 0 = infinito
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1200}
      />
    </p>
  );
}