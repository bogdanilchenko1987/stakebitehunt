import React from "react";
import Hero from "../components/Hero";
import AboutGame from "../components/AboutGame";
import Heroes from "../components/Heroes";
import GamePlay from "../components/GamePlay";
import WhatsNew from "../components/WhatsNew";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutGame />
      <Heroes />
      <GamePlay />
      <WhatsNew />
    </>
  );
};

export default HomePage;
