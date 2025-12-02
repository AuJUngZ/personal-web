import portfolioData from "@/data/portfolio.json";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero data={portfolioData.hero} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
    </>
  );
}
