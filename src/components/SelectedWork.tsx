import SectionLabel from "./SectionLabel";
import Image from "next/image";

const Projects = [
    {
        id: "01",
        name: "Pursuit",
        category: "Web Application",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
        description:
            "Application and career pathway tracker. Jobs, internships, learnerships, bursaries and university applications in one place.",
        image: "pursuit.png",
        link: "https://pursuit-brown-ten.vercel.app/",
    },
    {
        id: "02",
        name: "BitBunker (still in development)",
        category: "Web Application",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
        description:
            "Retro arcade games hub with 15 planned games and per-game leaderboards. Java game logic, a Next.js frontend, and a Spring Boot and PostgreSQL backend I am learning as I build. In development.",
        image: "bitbunker.png",
        // link: "",
    },
    {
        id: "03",
        name: "T's Cakes",
        category: "Business Website",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
        description:
            "Client website for a bakery business, plus a private admin hub where the owner approves or rejects customer reviews, built with Supabase.",
        image: "T's cakes preview.png",
        link: "https://tscakes.co.za",
    },
    {
        id: "04",
        name: "Golden Moments",
        category: "Business Website",
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        description:
            "A warm, elegant bakery website built to attract new customers and showcase the full product menu.",
        image: "golden-moments.png",
        link: "https://golden-moments-gold.vercel.app/",
    },
    {
        id: "05",
        name: "Portfolio Site",
        category: "Professional Portfolio",
        stack: ["HTML/CSS", "JavaScript"],
        description:
            "A personal portfolio for a creative professional, structured to showcase work clearly and make a strong first impression with prospective firms.",
        image: "Amais port preview.png",
        link: "https://amai-portfolio.vercel.app/",
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
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4 sm:p-6">
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <span className="shrink-0 text-xs font-family text-muted-forground">
                                    {project.id}
                                </span>

                                <span className="text-right font-mono text-xs uppercase tracking-wider text-muted-forground">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="mb-3 text-[1.1rem] font-bold transition-colors duration-200 group-hover:text-accent">
                                {project.name}
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-forground">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-1.5">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="border border-accent/25 px-2 py-0.5 text-xs uppercase tracking-wider text-accent"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto shrink-0 text-xs uppercase tracking-wider text-muted-forground transition-colors hover:text-foreground"
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
};

export default SelectedWork;