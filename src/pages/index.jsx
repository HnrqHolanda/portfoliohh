import Head from 'next/head';
import Header from '@/components/Header';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Content1 from '@/components/Content1';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - HH</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="relative min-h-screen text-white overflow-hidden">
        <Header />
        <BackgroundBlobs />

        {/* Conteúdo + Footer juntos em 100vh */}
        <main className="relative z-10 flex flex-col justify-between min-h-screen">
          {/* Conteúdo centralizado */}
          <section className="flex-1 flex items-center justify-center px-6 mt-10">
            <Content1 />
          </section>

          {/* Footer fixo ao final */}
          <Footer />
        </main>
      </div>
    </>
  );
}





