import React from "react";

import { CharactersHero } from "./CharactersHero/CharactersHero";
import { CharactersForm } from "./CharactersForm/CharactersForm";
import { CharactersGallery } from "./CharactersGallery/CharactersGallery";

export const Characters: React.FC = () => {
  return (
    <>
      <CharactersHero />
      <CharactersForm />
      <CharactersGallery />
    </>
  );
};
