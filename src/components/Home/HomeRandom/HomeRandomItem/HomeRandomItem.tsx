import React from "react";

type IProps = {
  name: string;
  description: string;
  onImageChange: () => void;
};

export const HomeRandomItem: React.FC<IProps> = ({
  name,
  description,
  onImageChange,
}) => {
  return (
    <li
      onClick={onImageChange}
      className="border-b border-light border-opacity-20 py-[32px]"
    >
      <h3 className="text-18s font-medium md:text-24">{name}</h3>
      <p className="mt-[14px] text-14 text-grey-50 md:mt-[16px] md:text-16">
        {description}
      </p>
    </li>
  );
};
