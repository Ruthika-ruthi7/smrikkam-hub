import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStrip } from "@/components/TechStrip";
import { Accelerators } from "@/components/Accelerators";
import { Solutions } from "@/components/Solutions";
import { Industries } from "@/components/Industries";
import { Platform } from "@/components/Platform";
import { CaseStudies } from "@/components/CaseStudies";
import { Architecture } from "@/components/Architecture";
import { WhyUs } from "@/components/WhyUs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMRIKAAM Technologies — Engineering Intelligent Enterprises" },
      {
        name: "description",
        content:
          "SMRIKAAM Technologies — an Enterprise Intelligence & Industrial AI ecosystem. AI, IIoT, data engineering, cloud and integrations for modern enterprises.",
      },
      { property: "og:title", content: "SMRIKAAM Technologies — Engineering Intelligent Enterprises" },
      {
        property: "og:description",
        content:
          "Industrial AI, IIoT, enterprise data engineering, cloud and integrations — engineered for production-grade outcomes.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <TechStrip />
      <Accelerators />
      <Solutions />
      <Industries />
      <Platform />
      <CaseStudies />
      <Architecture />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
