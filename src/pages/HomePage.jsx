import portfolioData from "@/data/portfolio.json";
import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import RecommendedBlog from "@/components/RecommendedBlog";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero
        data={portfolioData.hero}
        linkedin={portfolioData.contact.socials.find((social) => social.icon === "linkedin")}
      />
      <QuickFacts items={portfolioData.hero.highlights} />
      <RecommendedBlog />
      <Experience data={portfolioData.experience} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Credentials
        education={portfolioData.education}
        certifications={portfolioData.certifications}
      />
      <Contact data={portfolioData.contact} />
    </>
  );
}
