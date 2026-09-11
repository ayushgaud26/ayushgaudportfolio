import { createFileRoute } from "@tanstack/react-router";
import { Atmosphere } from "@/components/portfolio/Atmosphere";
import { FloatingNav } from "@/components/portfolio/FloatingNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

const title = "Ayush Gaud | AI/ML Engineer";
const description =
  "Portfolio of Ayush Gaud, an AI/ML Engineer building intelligent solutions with Machine Learning, Deep Learning, Computer Vision and Generative AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Atmosphere />
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
