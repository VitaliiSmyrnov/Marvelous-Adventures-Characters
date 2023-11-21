import React from "react";

import { CharactersHero } from "./CharactersHero";
import { CharactersForm } from "./CharactersForm";
import { CharactersGallery } from "./CharactersGallery";

export const Characters: React.FC = () => {
  return (
    <>
      <CharactersHero />
      <CharactersForm />
      <CharactersGallery />
    </>
  );
};
