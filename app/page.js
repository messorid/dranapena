import AboutDoctor from "@/components/AboutDoctor";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutDoctor/>
      <Services/>
      <Locations/>
      <Testimonials/>
      <FAQ/>
      <ContactCTA/>

    </main>
  );
}