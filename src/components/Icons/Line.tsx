import React from "react";

import { IconProps } from "src/modules/IProps";

export const Line: React.FC<IconProps> = (props) => (
  <svg fill="none" viewBox="0 0 190 6" {...props}>
    <path
      d="M5 2.5 0 .113v5.774L5 3.5v-1Zm180 1 5 2.387V.113L185 2.5v1ZM4.5 3.5h181v-1H4.5v1Z"
      fill="#FAFAFA"
      fillOpacity=".15"
    />
  </svg>
);
