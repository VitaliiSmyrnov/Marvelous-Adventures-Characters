import React from "react";
import { HomeRandomItem } from "../HomeRandomItem/HomeRandomItem";
import { ICharacters } from "src/modules/IProps";

interface IProps {
  items: ICharacters[];
  onImageChange: (id: number) => void;
}

export const HomeRandomList: React.FC<IProps> = ({ items, onImageChange }) => {
  return (
    <ul>
      {items.map(({ name, description, id }, idx) => {
        return (
          <HomeRandomItem key={id} name={name} description={description} onImageChange={()=> onImageChange(idx)}/>
        );
      })}
    </ul>
  );
};
