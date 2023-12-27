import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export interface ICharacters {
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  description: string;
  id: number;
}
