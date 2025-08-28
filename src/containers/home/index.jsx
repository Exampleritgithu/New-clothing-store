import Hero from "../../components/home/Hero";
import MostPopular from "../../components/home/Mostpopular";
import Explorbag from "../../components/home/Explorbag";
import Professions from "../../components/home/Professions";
import Newtshop from "../../components/home/Newtshop";
import NewArival from "../../components/home/NewArival";
import Testimonial from "../../components/home/Testimonial";
import Features from "../../components/home/Features";
import HeroSection from "../../components/home/HeroSection";
import Footer from "../../components/home/Footer";


const HomePage = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <Explorbag />
      <Professions />
      <Newtshop />
      <NewArival />
      <Testimonial/>
      <Features/>
      <HeroSection/>
      <Footer/>
      
    </>
  );
};

export default HomePage;
