import SectionLabel from "./SectionLabel";

const SERVICES = [
    {
        id: "01",
        name: "Web Design",
        description:
            "Custom websites built from scratch, tailored to your brand and goals.",
    },
    {
        id: "02",
        name: "Professional Portfolios",
        description:
            "Personal websites creatives and professionals.",
    },
    {
        id: "03",
        name: "Landing Pages",
        description:
            "Focused pages designed to turn visitors into enquiries and customers.",
    },
    {
        id: "04",
        name: "Website Redesigns",
        description:
            "Modernise an outdated website with a cleaner, more professional experience.",
    },
    {
        id: "05",
        name: "Web Applications",
        description:
            "Custom web-based applications built for specific business needs.",
    },
    {
        id: "06",
        name: "Maintenance",
        description:
            "Ongoing updates and support so your site stays fresh and working.",
    },
  
];

const Services = () => {
    return ( 
        <section id="services" className="section">
            <SectionLabel number="02" label="What I Offer" />

            <h2 className="flex flex-col font-sans gap-2 mb-15">
                <span className="text-[clamp(3rem,8vw,2rem)] leading-[0.95] text-foreground">
                    A focused set of services,
                </span>
                <span className="text-[clamp(3rem,8vw,2rem)] leading-[0.95] text-accent">
                    done properly
                </span>
            </h2>

            <div className="grid md:grid-cols-3">
                {SERVICES.map((service) => (
                    <div 
                        key={service.id} 
                        className="group flex flex-col gap-2 p-5 hover:bg-hover hover:text-accent hover:-translate-y-0.5 transition-all duration-300 ease-in-out border-b border-r border-border md:nth-[3n]:border-r-0 md:nth-last-[-n+3]:border-b-0"
                    >
                        <h3 className="text-accent text-[1.1rem]">
                            {service.id}
                        </h3>
                        <h3 className="font-bold text-[1.1rem] ">
                            {service.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-forground">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Services;