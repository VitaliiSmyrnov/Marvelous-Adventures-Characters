import { FC } from "react";

import { IconProps } from "src/modules/IProps";

export const SearchIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" {...props}>
    <path
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
