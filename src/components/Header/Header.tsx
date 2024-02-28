import { FC } from "react";
import { Link } from "react-router-dom";

import { LogoIcon, SearchIcon } from "src/components/Icons";

export const Header: FC = () => {
  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-[20px] pt-[20px] md:px-[32px] md:pt-[24px]">
      <Link
        to="/"
        className="inline-block h-[16px] w-[98px] md:h-[32px] md:w-[202px]"
      >
        <LogoIcon className="h-[16px] w-[98px] md:h-[32px] md:w-[202px]" />
        <span className="sr-only">Logo</span>
      </Link>

      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="h-[28px] w-[108px] rounded-[1000px] border border-solid border-light border-opacity-30 bg-transparent py-[6px] pl-[42px] pr-[17px] text-12 font-medium outline-none placeholder:text-12 placeholder:font-medium placeholder:uppercase placeholder:text-light md:h-[42px] md:w-[130px] md:py-[12px] md:pl-[50px] md:pr-[23px] md:text-14 placeholder:md:text-14"
        />
        <SearchIcon className="absolute left-[18px] top-[6px] h-4 w-4 fill-transparent stroke-current md:left-[24px] md:top-[13px]" />
      </div>
    </header>
  );
};
