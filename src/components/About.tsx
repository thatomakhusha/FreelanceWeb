import SectionLabel from "./SectionLabel";

const About = () => {
    return ( 
        <section className="section bg-hover">
            <SectionLabel number="05" label="About" />
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <p>
                        Built on craft, delivered with honesty.
                    </p>
                    <p>
                        I'm Thato Makhusha, a web designer and developer focused on building thoughtful, 
                        professional websites for businesses and individuals who take their online presence 
                        seriously.
                    </p>
                    <p>
                        I design and develop websites from scratch, with every project built around the client's goals, audience, and brand. 
                        No templates and no drag and drop builders. Just purposeful design, clean development, and attention to detail.
                    </p>
                    <p>
                        I work with professionals, small businesses, and growing brands that want more than just a website.
                        They want a digital presence that builds credibility, communicates clearly, and helps move their business forward.
                    </p>
                </div>
                <div>

                </div>
            </div>
        </section>
     );
}
 
export default About;