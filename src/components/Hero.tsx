const Hero = () => {
    return ( 
        <section className="section flex min-h-screen flex-col justify-center">
            <div className="flex justify-between">
                <div className="mb-8 flex items-center gap-3 font-mono text-sm text-accent uppercase">
                <span className="h-2 w-2 rounded-full bg-accent"></span>
                Available for work
            </div>
                <p className="font-mono text-sm uppercase tracking-[0.06em] text-muted">
                    Johannesburg, South Africa
                </p>
            </div>
            
            <h1 className="flex flex-col font-mono">
                <span className="text-[clamp(3rem,8vw,5rem)] leading-[0.95] text-foreground">
                    Thato
                </span>
                <span className="text-[clamp(3rem,8vw,5rem)] leading-[0.95] text-foreground">
                    Makhusha.
                </span>
                <span className="text-[clamp(3rem,8vw,5rem)] leading-[0.95] text-accent">
                    Web Designer & Developer
                </span>
            </h1>
            <p className="mb-10 mt-8 max-w-2xl font-mono text-base leading-relaxed text-muted md:text-lg">
                I design and build fast, modern websites for businesses, professionals and growing brands.
            </p>
            <div className="flex flex-wrap items-center gap-6">
                <a href="#work" className="bg-accent px-5 py-2 font-mono text-sm font-medium uppercase tracking-[0.06em] text-background transition-opacity duration-200 hover:opacity-80">
                    View selected work
                </a>
                <a href="#contact" className="border-b border-muted pb-1 font-mono text-sm uppercase tracking-[0.06em] text-foreground transition-colors duration-200 hover:border-accent">
                    Start a project &rarr;
                </a>
            </div>
            
        </section>
     );
}
 
export default Hero;