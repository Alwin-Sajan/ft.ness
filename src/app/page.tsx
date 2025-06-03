import { HeroSectionOne } from "../../components/Hero";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";

export default function Home() {

  return (
    <main>
      <HeroSectionOne />

      <Contact/>

      <div className="h-[20rem] flex items-center justify-center">
        <TextHoverEffect text="FT.NESS" />
      </div>

      <Footer/>
      
    </main>
  );
}
