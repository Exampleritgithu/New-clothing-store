import Hero from "../../components/home/Hero";
import MostPopular from "../../components/home/Mostpopular";
import Explorbag from "../../components/home/Explorbag";
import Professions from "../../components/home/Professions";
import Newtshop from "../../components/home/Newtshop";
import NewArival from "../../components/home/NewArival";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <Explorbag />
      <Professions />
      <Newtshop />
      <NewArival />
    </>
  );
};

export default HomePage;
