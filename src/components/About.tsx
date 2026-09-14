import SectionLabel from "./SectionLabel";

const SKILLS = [
    "HTML/CSS",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Firebase",
    "Supabase",
    "Responsive Design",
    "UI/UX",
    "Git/GitHub",
];

const EXPECTATIONS = [
    "Clear written proposals before work begins",
    "Direct communication throughout the project",
    "Hand-coded websites",
    "Mobile-first, responsive on all devices",
    "Delivered on time",
];

const About = () => {
    return ( 
        <section className="section bg-hover">
            <SectionLabel number="05" label="About" />
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-5">
                    <p className="font-sans text-[2.6rem] ">
                        Built on craft, delivered with honesty.
                    </p>
                    <p className="text-muted-forground text-[0.97rem]">
                        I'm Thato Makhusha, a web designer and developer focused on building thoughtful, 
                        professional websites for businesses and individuals who take their online presence 
                        seriously.
                    </p>
                    <p className="text-muted-forground text-[0.97rem]"> 
                        I design and develop websites from scratch, with every project built around the client's goals, audience, and brand. 
                        Purposeful design, clean development, and attention to detail.
                    </p>
                    <p className="text-muted-forground text-[0.97rem]">
                        I work with professionals, small businesses, and growing brands that want more than just a website.
                        I'm direct, reliable, and genuinely invested in the outcome of every project I take on.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-accent uppercase text-[0.85rem]">
                        Technical Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {SKILLS.map((item) => (
                            <span
                                key={item}
                                className="border border-border px-3 py-2 text-sm text-muted-forground"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 border border-border p-5 bg-background">
                        <p className="text-accent uppercase text-[0.85rem]">
                            What to expect
                        </p>
                        <div className="flex flex-col gap-2">
                            {EXPECTATIONS.map((item) => (
                                <div>
                                    <span style={{ color: "#39d353", marginTop: 2, flexShrink: 0 }}>—</span>
                                    <span className="ml-3">
                                        {item}
                                    </span>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;