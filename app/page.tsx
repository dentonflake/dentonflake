
import About from "./components/about";
import Contact from "./components/contact";
import FeaturedProjects from "./components/projects/featured-projects";
import Hero from "./components/hero";

const Page = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
    </main>
  );
};

export default Page;
