import HeroSection from "../components/HeroSection";

const Home = () => {
  const data = {
    name: "Saha Store",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
