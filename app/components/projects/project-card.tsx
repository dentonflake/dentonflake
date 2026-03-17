import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/lib/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-xl border border-border bg-surface p-6">
      <div className="overflow-hidden rounded-lg border border-border bg-background">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            width={1200}
            height={900}
            className="h-auto w-full"
          />
        ) : (
          <div className="flex min-h-56 items-center justify-center">
            <span className="text-sm text-muted">Preview image</span>
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-3 text-muted">{project.description}</p>

        {project.stack && project.stack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-medium text-accent"
        >
          View Project
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
