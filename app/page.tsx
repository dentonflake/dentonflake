import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Contributions from "./components/Contributions";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <section className="section-pad !pt-0">
          <div className="max-w-7xl mx-auto">
            <Contributions />
          </div>
        </section>
        <Projects />
        <Experience />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
