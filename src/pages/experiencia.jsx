import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import InfoCard from '@/components/InfoCard';
import Head from 'next/head';

export default function Experiencia() {
  return (
    <>
      <Head>
        <title>Portfolio - HH</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="relative min-h-screen text-white overflow-hidden">
        <Header />
        <BackgroundBlobs />

        <main className="relative z-10 flex flex-col justify-between min-h-screen">
          <section className="flex-1 px-6 mt-22 max-w-7xl mx-auto">
            <h2 className="text-5xl text-cyan-400 font-bold text-center mb-12">Experiência</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experiências Profissionais */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 border-b border-cyan-500 pb-2">Experiências Profissionais</h2>
                <div className="flex flex-col gap-6">
                  <InfoCard 
                    logo="/images/imejunior2.jpeg" 
                    title="Desenvolvedor e Professor - IME Junior" 
                    description="Atuei na criação de aplicações web e mobile com React, React Native e Firebase. Também fui responsável por ministrar aulas de introdução a HTML, CSS e JavaScript para novos integrantes da equipe."
                  />
                  <InfoCard 
                    logo="/images/Logo.png" 
                    title="Aluno Militar - IME" 
                    description="Vivência em instruções, formações e treinamentos militares, desenvolvendo disciplina, hierarquia e comprometimento. Experiência que fortaleceu a postura profissional, pontualidade e resiliência."
                  />
                </div>
              </div>

              {/* Certificados */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 border-b border-cyan-500 pb-2">Certificados</h2>
                <div className="flex flex-col gap-6">
                  <InfoCard 
                    logo="/images/udemy2.png" 
                    title="100 days of code, the python pro bootcamp - Udemy" 
                    description="Curso intensivo com abordagem prática, cobrindo desde fundamentos da linguagem até projetos avançados com Flask, automação, web scraping e APIs com Python."
                  />
                  <InfoCard 
                    logo="/images/cambridge2.png" 
                    title="Certificate of Advanced English - Cambridge university" 
                    description="Certificação internacional de proficiência em inglês no qual obtive menção B2, concedida pela Cambridge University."
                  />
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}


