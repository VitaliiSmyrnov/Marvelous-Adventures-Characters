import { FC } from "react";

type IProps = {
  name: string;
  description: string;
  isActive: boolean;
  // onCharacterChange: () => void;
};

export const HomeRandomItem: FC<IProps> = ({
  name,
  description,
  isActive,
  // onCharacterChange,
}) => {
  return (
    <li
      // onClick={onCharacterChange}
      className="border-b border-light border-opacity-20 py-[32px]"
    >
      <h3
        className={`text-18s font-medium md:text-24 ${
          isActive ? "text-accent-t" : "text-light"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-[14px] text-14  md:mt-[16px] md:text-16 ${
          isActive ? "text-accent-t" : "text-grey-50"
        }`}
      >
        {description}
      </p>
    </li>
  );
};
