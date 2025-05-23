import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import ProjetosSection from '@/components/ProjetosSection';
import Head from 'next/head';

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Portfolio - HH</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="text-white flex flex-col min-h-screen">
        <Header />
        <BackgroundBlobs />

        <main className="flex flex-col relative z-20 flex-1">
          <section className="flex-1">
            <ProjetosSection />
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}


