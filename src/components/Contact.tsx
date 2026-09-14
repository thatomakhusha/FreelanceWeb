"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);
    setStatus("");

    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    formData.append(
      "subject",
      `New Portfolio Enquiry from ${formData.get("name")}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setStatus(
        "Message sent successfully. I'll get back to you within 24 hours."
      );

      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <SectionLabel number="06" label="Contact" />

      <div className="grid grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="flex flex-col gap-5">
          <p className="font-sans text-[2.6rem]">
            Ready to start your project?
          </p>

          <p className="text-muted-forground text-[0.97rem]">
            Every project starts with a conversation. Reach out directly or
            use the form — I&apos;ll respond within 24 hours.
          </p>

          {/* Phone */}
          <div className="mr-4 mt-6 flex gap-4 border border-border bg-hover p-4">
            <div className="border border-accent bg-background px-3 py-3">
              <Phone size={16} className="text-accent" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-sans text-[0.7rem] uppercase text-muted-forground">
                Phone
              </p>

              <p className="font-sans">+27 (0)73 963 5201</p>
            </div>
          </div>

          {/* Email */}
          <div className="mr-4 flex gap-4 border border-border bg-hover p-4">
            <div className="border border-accent bg-background px-3 py-3">
              <Mail size={16} className="text-accent" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-sans text-[0.7rem] uppercase text-muted-forground">
                Email
              </p>

              <p className="font-sans">thembamakhusha@outlook.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-sans text-[0.7rem] uppercase text-muted-forground"
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
                className="font-sans text-[0.7rem] uppercase text-muted-forground"
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

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="font-sans text-[0.7rem] uppercase text-muted-forground"
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

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-sans text-[0.7rem] uppercase text-muted-forground"
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

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-fit cursor-pointer border border-accent bg-accent px-6 py-3 font-sans text-sm text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status && (
            <p className="font-sans text-sm text-muted-forground">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
