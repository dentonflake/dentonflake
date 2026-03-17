
import About from "./components/about";
import FeaturedProjects from "./components/projects/featured-projects";
import Hero from "./components/hero";

const Page = () => {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <About />
    </main>
  );
};

export default Page;
