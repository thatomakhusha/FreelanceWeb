import SectionLabel from "./SectionLabel";
import Image from "next/image";

const Projects = [
    {
    id: "01",
    name: "SpendWise",
    category: "Web Application",
     stack: ["HTML/CSS", "JavaScript", "Firebase"],
    description:
      "A full-featured expense tracker with income and expense logging, category breakdowns, and a monthly overview dashboard.",
    image: "Spendwise preview.png",
    link: "https://thatomakhusha.github.io/WebsiteSpendWise/",
  },
  {
    id: "02",
    name: "T's Cakes",
    category: "Business Website",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
        "A warm, elegant bakery website built to attract new customers and showcase the full product menu.",
    image: "T's cakes preview.png",
    link: "https://ts-cakes.vercel.app/",
  },
  {
    id: "03",
    name: "Golden Moments",
    category: "Business Website",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "A warm, elegant bakery website built to attract new customers and showcase the full product menu.",
    image: "Golden moments preview.png",
    link: "https://golden-moments-gold.vercel.app/",
  },
  {
    id: "04",
    name: "Portfolio Site",
    category: "Professional Portfolio",
    stack: ["HTML/CSS", "JavaScript"],
    description:
      "A personal portfolio for a creative professional, structured to showcase work clearly and make a strong first impression with prospective firms.",
    image: "Amais port preview.png",
    link: "https://thatomakhusha.github.io/Amai-Portfolio/",
  },
];

const SelectedWork = () => {
    return ( 
        <section id="work" className="section">
            <SectionLabel number="01" label="Selected Work" />
            <div className="grid gap-6 md:grid-cols-2">
                {Projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="group flex flex-col rounded-2xl border border-border transition-colors duration-200 hover:border-accent"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                            <Image
                                src={`/images/${project.image}`}
                                alt={`${project.name} preview`}
                                fill
                                className="object-fill"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-5 flex justify-between">
                                <span className=" text-xs font-family text-muted-forground">
                                    {project.id}
                                </span>
                                <span className="font-mono text-xs uppercase tracking-wider text-muted-forground">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="mb-3 text-[1.1rem] font-bold transition-colors duration-200 group-hover:text-accent">
                                {project.name}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-forground">
                                {project.description}
                            </p>
                            <div className="mt-5 flex items-center gap-1.5">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-accent/25 px-2 py-0.5 text-xs uppercase tracking-wider text-accent"
                                    >
                                        {tech}
                                    </span>
                                    ))}

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto text-xs uppercase tracking-wider text-muted-forground transition-colors hover:text-foreground"
                                    >
                                        View →
                                    </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default SelectedWork;