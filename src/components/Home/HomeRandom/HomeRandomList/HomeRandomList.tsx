import React from "react";
import { HomeRandomItem } from "../HomeRandomItem/HomeRandomItem";
import { ICharacters } from "src/modules/IProps";

interface IProps {
  items: ICharacters[];
  onCharacterChange: (id: number) => void;
}

export const HomeRandomList: React.FC<IProps> = ({
  items,
  onCharacterChange,
}) => {
  return (
    <ul>
      {items.map(({ name, description, isActive, id }) => {
        return (
          <HomeRandomItem
            key={id}
            name={name}
            description={description}
            isActive={isActive}
            onCharacterChange={() => onCharacterChange(id)}
          />
        );
      })}
    </ul>
  );
};
