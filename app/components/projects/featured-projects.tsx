import ProjectCard from "./project-card";
import { featuredProjects } from "@/app/lib/projects";

const FeaturedProjects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-sm text-accent">Featured Projects</p>
      <h2 className="mt-4 text-3xl font-bold text-foreground">Selected work</h2>
      <p className="mt-4 max-w-2xl text-muted">
        A few projects that show how I approach product thinking, interface design, and front-end engineering.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
