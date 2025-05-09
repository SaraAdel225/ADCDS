import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import Objectives from "../component/Objectives";
import Features from "../component/Features";
import FrequentlyAskedQuestions from "../component/FrequentlyAskedQuestions";
import ContactUs from "../component/ContactUs";
import Footer from "../component/Footer";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <Objectives/>
      <Features/>
      <FrequentlyAskedQuestions/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
