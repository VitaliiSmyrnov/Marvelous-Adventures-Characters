import { FC } from "react";
import { ICharacters } from "src/modules/IProps";

interface IProps {
  items: ICharacters[];
}

export const HomeRandomImage: FC<IProps> = ({ items }) => {
  const activeCharacter = items.find((item) => item.isActive)!;
  const { path, extension } = activeCharacter.thumbnail;

  return (
    <div className="max-h-[335px] max-w-[335px] rounded md:max-h-[704px] md:max-w-[704px] lg:min-w-[496px] lg:max-w-[496px]">
      <img
        src={`${path}.${extension}`}
        alt="Random character"
        loading="lazy"
        className="h-full max-h-full w-full max-w-full rounded object-cover"
      />
    </div>
  );
};
