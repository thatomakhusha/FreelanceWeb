import SectionLabel from "./SectionLabel";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
    return ( 
        <section id="contact" className="section">
            <SectionLabel number="06" label="Contact" />
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-5">
                        <p className="font-sans text-[2.6rem] ">
                            Ready to start your project?
                        </p>
                        <p className="text-muted-forground text-[0.97rem]">
                            Every project starts with a conversation. 
                            Reach out directly or use the form — I'll respond within 24 hours.
                        </p>
                        <div className="flex gap-4 p-4 mr-4 bg-hover border border-border mt-6">
                            <div className="border border-accent bg-background px-3 py-3">
                                <Phone size={16} className="text-accent"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-sans uppercase text-[0.7rem] text-muted-forground">
                                    Phone
                                </p>
                                <p className="font-sans">
                                    +27 (0)73 963 5201
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 mr-4 bg-hover border border-border">
                            <div className="border border-accent bg-background px-3 py-3">
                                <Mail size={16} className="text-accent"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-sans uppercase text-[0.7rem] text-muted-forground">
                                    EMAIL
                                </p>
                                <p className="font-sans">
                                    thembamakhusha@outlook.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col gap-5">

                    <div className="grid grid-cols-2 gap-4">

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="font-sans uppercase text-[0.7rem] text-muted-forground"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                className="border border-border bg-hover px-4 py-3 font-sans outline-none transition-colors focus:border-accent"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="font-sans uppercase text-[0.7rem] text-muted-forground"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="border border-border bg-hover px-4 py-3 font-sans outline-none transition-colors focus:border-accent"
                                required
                            />
                        </div>

                    </div>


                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="subject"
                            className="font-sans uppercase text-[0.7rem] text-muted-forground"
                        >
                            Subject
                        </label>

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What can I help you with?"
                            className="border border-border bg-hover px-4 py-3 font-sans outline-none transition-colors focus:border-accent"
                            required
                        />
                    </div>


                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="font-sans uppercase text-[0.7rem] text-muted-forground"
                        >
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={7}
                            placeholder="Tell me about your project — what you need, your timeline, and any other relevant details."
                            className="resize-vertical border border-border bg-hover px-4 py-3 font-sans outline-none transition-colors focus:border-accent"
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-fit border border-accent bg-accent px-6 py-3 font-sans text-sm text-background transition-opacity hover:opacity-80 cursor-pointer"
                    >
                        Send Message
                    </button>

                </form>
                </div>
        </section>
     );
}
 
export default Contact;