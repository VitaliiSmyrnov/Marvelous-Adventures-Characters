import React from "react";

import { HomeHero } from "./HomeHero/HomeHero";
import { HomeRandom } from "./HomeRandom/HomeRandom";

export const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeRandom />
    </>
  );
};
