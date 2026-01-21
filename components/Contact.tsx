"use client";
import { MailIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const message = form.get("message") || "";
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:hello@printastic.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto my-16 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-start bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-8">
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="mb-6 text-gray-300">
            Reach out via social or send us a message — we usually reply within
            24 hours.
          </p>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.879v-6.99H7.897v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.127 22 17 22 12z" />
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 6.5A4.5 4.5 0 1 1 7.5 13 4.505 4.505 0 0 1 12 8.5zm6.5-.75a1.125 1.125 0 1 1-1.125 1.125A1.126 1.126 0 0 1 18.5 7.75zM12 10.5A1.5 1.5 0 1 0 13.5 12 1.502 1.502 0 0 0 12 10.5z" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@printastic.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white"
              >
                <MailIcon className="w-6 h-6" />
                hello@printastic.com
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-md bg-white/5 border border-white/6 px-4 py-2 text-sm text-white placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full rounded-md bg-white/5 border border-white/6 px-4 py-2 text-sm text-white placeholder:text-gray-400"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your message"
            className="w-full rounded-md bg-white/5 border border-white/6 px-4 py-2 text-sm text-white placeholder:text-gray-400"
          />
          <div className="flex justify-end">
            <PrimaryButton type="submit">Send Message</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
}
