import { FC, useEffect } from "react";

import { HomeRandomItem } from "../HomeRandomItem/HomeRandomItem";
import { ICharacters } from "src/modules/IProps";

interface IProps {
  items: ICharacters[];
  // onCharacterChange: (id: number) => void;
  onCharacterChange: () => void;
}

export const HomeRandomList: FC<IProps> = ({ items, onCharacterChange }) => {
  useEffect(() => {
    const interval = setInterval(onCharacterChange, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [onCharacterChange]);

  return (
    <ul>
      {items.map(({ name, description, isActive, id }) => {
        return (
          <HomeRandomItem
            key={id}
            name={name}
            description={description}
            isActive={isActive}
            // onCharacterChange={() => onCharacterChange(id)}
          />
        );
      })}
    </ul>
  );
};
