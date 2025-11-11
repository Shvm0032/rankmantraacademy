import AboutHero from "@/components/about/AboutHero";
import WelcomeSection from "@/components/about/WelcomeSection";
import ChooseSection from "@/components/about/ChooseSection";
import AboutMessage from "@/components/about/AboutMessage";
import StudentTestimonial from "@/components/about/StudentTestimonial";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WelcomeSection/>
      <ChooseSection/>
      <AboutMessage/>
      <StudentTestimonial/>
    </>
  );
}
