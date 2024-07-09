import Hero from './_components/Hero';
import AboutPage from './about';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="hero" className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <Hero /> */}
        <AboutPage />
      </section>
      <section id="about" className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <AboutPage />
      </section>
    </main>
  );
}
