import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal>
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </ScrollReveal>
    </>
  );
}
