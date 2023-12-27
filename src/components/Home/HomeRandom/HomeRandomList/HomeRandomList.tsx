import React from "react";
import { HomeRandomItem } from "../HomeRandomItem/HomeRandomItem";
import { ICharacters } from "src/modules/IProps";

interface IProps {
  items: ICharacters[];
}

export const HomeRandomList: React.FC<IProps> = ({ items }) => {
  return (
    <ul>
      {items.map(({ name, description, id }) => {
        return (
          <HomeRandomItem key={id} name={name} description={description} />
        );
      })}
    </ul>
  );
};
