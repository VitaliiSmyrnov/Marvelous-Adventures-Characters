import React from "react";
import { Link } from "react-router-dom";

export const CharactersHero: React.FC = () => {
  return (
    <section>
      <div className="flex h-[509px] flex-col bg-hero-mob bg-cover bg-center bg-no-repeat px-[20px] md:h-[780px] md:bg-hero-tab md:px-[32px] lg:bg-hero-desk dpr2:bg-hero-mob2x md:dpr2:bg-hero-tab2x lg:dpr2:bg-hero-desk2x dpr3:bg-hero-mob3x md:dpr3:bg-hero-tab3x lg:dpr3:bg-hero-desk3x">
        <p className="pt-[220px] text-14 uppercase text-white/70 md:pt-[278px] md:text-18">
          Web-based platform
        </p>

        <h2 className="mt-[14px] text-50 font-medium sm:text-60 md:mt-[27px] md:text-128 lg:mt-[16px] lg:text-150">
          Characters
        </h2>

        <p className="mt-[16px] text-14 sm:text-16L md:w-[558px] md:pl-[88px] lg:w-[524px]">
          With over 70,000 characters in the Marvel Multiverse, this is the most
          complete public listing in existence.
        </p>

        <Link
          to="/"
          className="mt-[65px] inline-block self-end rounded-[1000px] border border-solid border-grey-50 px-[20px] py-[10px] text-12L font-medium uppercase md:mt-[188px] md:px-[24px] md:py-[12px] md:text-14 lg:mt-[145px]"
        >
          Back home
        </Link>
      </div>
    </section>
  );
};
