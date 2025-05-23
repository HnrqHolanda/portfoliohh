import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import ProjetosSection from '@/components/ProjetosSection';

export default function Projetos() {
  return (
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
  );
}

