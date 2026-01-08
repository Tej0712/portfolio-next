import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Experience";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

