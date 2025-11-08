import HeroHome from "@/components/home/HeroHome";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";
import HomeCourses from "@/components/home/HomeCourses";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";
import Testimonials from "@/components/home/Testimonials";


export default function HomePage() {
  return (
    <>
      <HeroHome />
      <HomeAbout />
      <HomeCourses />
      <HomeWhyChooseUs />
      <HomeContact />
      <Testimonials />
    </>
  );
}
