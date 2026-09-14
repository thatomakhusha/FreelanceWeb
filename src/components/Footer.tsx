const FOOTER_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const Footer = () => {
    return (
        <footer className="px-5 py-10 sm:px-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
                <div className="flex flex-col gap-2">
                    <a
                        href="#"
                        className="font-mono text-xl font-bold tracking-tight text-accent"
                    >
                        TM
                    </a>

                    <p className="text-[0.8rem] text-muted-forground">
                        Web Designer & Developer — Johannesburg
                    </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 md:mt-5 md:gap-8">
                    {FOOTER_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono text-[0.7rem] uppercase tracking-[0.06em] text-muted-forground transition-colors duration-200 hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="text-[0.7rem] text-muted-forground md:mt-5">
                    © 2026 Thato Makhusha
                </div>
            </div>
        </footer>
    );
};

export default Footer;