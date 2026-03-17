export type Project = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  stack?: string[];
};

export const featuredProjects: Project[] = [
  {
    title: "Lacy Coombs Hairstylist",
    description:
      "A hairstylist portfolio website designed to showcase services, highlight the brand, and make it easy for clients to browse and book.",
    href: "https://www.lacycoombshairstylist.com/",
    image: "/projects/lacy-coombs-hairstylist.png",
    imageAlt: "Preview of the Lacy Coombs Hairstylist website",
    stack: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    title: "My Family",
    description:
      "A family-focused website built as a front-end project, with content and pages organized to present personal information in a clear, approachable way.",
    href: "https://dentonflake.github.io/wdd231/final/",
    image: "/projects/my-family.png",
    imageAlt: "Preview of the My Family website",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Chamber of Commerce",
    description:
      "A responsive chamber of commerce website built for a front-end course project, with business listings, local content, and client-side interactivity.",
    href: "https://dentonflake.github.io/wdd231/chamber/",
    image: "/projects/chamber-of-commerce.png",
    imageAlt: "Preview of the Chamber of Commerce website",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
