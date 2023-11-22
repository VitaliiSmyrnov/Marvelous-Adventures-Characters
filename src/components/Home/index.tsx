import React from "react";

import { HomeHero } from "./HomeHero";
import { HomeRandom } from "./HomeRandom";

export const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeRandom />
    </>
  );
};
