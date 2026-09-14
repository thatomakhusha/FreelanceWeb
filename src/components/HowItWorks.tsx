import SectionLabel from "./SectionLabel";

const PROCESSES = [
    {
        id: "01",
        name: "Discovery",
        description:
            "We start with a conversation about your business, your goals, and who you're trying to reach. I ask the right questions so nothing is assumed.",
    },
    {
        id: "02",
        name: "Proposal",
        description:
            "You receive a clear written proposal: scope, timeline, and pricing. Work begins once we agree.",
    },
    {
        id: "03",
        name: "Build",
        description:
            "I bring the agreed direction to life, whether you're providing the design or I’m creating the visual direction, then build a responsive, functional website around it.",
    },
    {
        id: "04",
        name: "Review & Launch",
        description:
            "You review the finished website, we make the final refinements, and once everything is approved, your website goes live. Post-launch support is included.",
    },
];

const HowItWorks = () => {
    return (
        <section className="section bg-hover">
            <SectionLabel number="03" label="How it works" />

            <div className="grid md:grid-cols-4">
                {PROCESSES.map((process) => (
                    <div
                        key={process.id}
                        className="flex flex-col gap-4 border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0"
                    >
                        <p className="font-family text-[2rem] font-bold text-accent-muted">
                            {process.id}
                        </p>

                        <h3 className="text-[1.1rem] font-bold">
                            {process.name}
                        </h3>

                        <p className="text-sm leading-relaxed text-muted-forground">
                            {process.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;