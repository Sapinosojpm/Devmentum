"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <Faq />
      <Contact />
      <CTA />
    </>
  );
}
