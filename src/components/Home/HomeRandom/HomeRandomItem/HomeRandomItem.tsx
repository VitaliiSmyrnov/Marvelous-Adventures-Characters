import { FC, useState } from "react";

type IProps = {
  name: string;
  description: string;
  onImageChange: () => void;
};

export const HomeRandomItem: FC<IProps> = ({
  name,
  description,
  onImageChange,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    onImageChange();
    setIsClicked((prev) => !prev);
  };

  return (
    <li
      onClick={handleClicked}
      className="border-b border-light border-opacity-20 py-[32px]"
    >
      <h3
        className={`text-18s font-medium md:text-24 ${
          isClicked ? "text-accent-t" : "text-light"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-[14px] text-14  md:mt-[16px] md:text-16 ${
          isClicked ? "text-accent-t" : "text-grey-50"
        }`}
      >
        {description}
      </p>
    </li>
  );
};
