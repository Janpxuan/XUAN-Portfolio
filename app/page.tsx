import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OtherWorksGrid } from "@/components/OtherWorksGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <FeaturedProjects />
        <OtherWorksGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
