import { FC } from "react";
import { Link } from "react-router-dom";

import { LineIcon } from "src/components/Icons";

export const HomeHero: FC = () => {
  return (
    <section className="mb-[80px] flex flex-col gap-[40px] pl-[20px] pr-[20px] md:mb-[128px] md:gap-[32px] md:pl-[32px] md:pr-[32px] lg:flex-row lg:gap-[66px] lg:pr-0">
      <div className="pt-[92px] md:pt-[146px] lg:pt-[210px]">
        <p className="mb-[14px] text-14 text-white/70 md:mb-[16px] md:text-18">
          Web-based platform
        </p>
        <h1 className="mb-[16px] text-44 font-medium md:text-80">
          Marvelous Adventures
        </h1>
        <p className="mb-[20px] text-14 md:mb-[32px] md:w-[475px] md:text-16 lg:w-[529px]">
          is a web-based platform that provides an immersive experience for
          users to explore and discover a vast collection of Marvel characters
          and comics. Start exploring the Marvelous Adventures now by visiting
          our Characters and Comics sections and discover your new favorites
          today.
        </p>
        <Link
          to="characters"
          className="inline-block rounded-[1000px] bg-accent px-[20px] py-[10px] text-12L font-medium uppercase md:px-[24px] md:py-[12px] md:text-14"
        >
          All Characters
        </Link>
      </div>

      <div className="flex flex-col gap-[20px] md:flex-row md:gap-[32px]">
        <div className="md:pt-[79px] lg:pt-[200px]">
          <div className="h-[256px] w-[190px] overflow-hidden rounded md:h-[540px] md:w-[336px] lg:w-[352px]">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="
              src/assets/images/mob/mob-panther-1.jpg    1x,
              src/assets/images/mob/mob-panther-1@2x.jpg 2x,
              src/assets/images/mob/mob-panther-1@3x.jpg 3x
            "
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet="
                src/assets/images/tab/tab-panther-1.jpg    1x,
                src/assets/images/tab/tab-panther-1@2x.jpg 2x,
                src/assets/images/tab/tab-panther-1@3x.jpg 3x
            "
              />
              <source
                media="(min-width: 1440px)"
                srcSet="
                src/assets/images/desk/desk-panther-1.jpg    1x,
                src/assets/images/desk/desk-panther-1@2x.jpg 2x,
                src/assets/images/desk/desk-panther-1@3x.jpg 3x
            "
              />
              <img
                src="src/assets/images/mob/mob-panther-1.jpg"
                alt="Panther"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
        </div>

        <div className="relative self-end lg:self-start">
          <div className="mb-[12px] h-[256px] w-[190px] overflow-hidden rounded rounded-bl-md md:mb-[14px] md:h-[540px] md:w-[336px] lg:mb-[30px] lg:w-[352px]">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="
                src/assets/images/mob/mob-panther-2.jpg    1x,
                src/assets/images/mob/mob-panther-2@2x.jpg 2x,
                src/assets/images/mob/mob-panther-2@3x.jpg 3x
            "
              />
              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet="
                src/assets/images/tab/tab-panther-2.jpg    1x,
                src/assets/images/tab/tab-panther-2@2x.jpg 2x,
                src/assets/images/tab/tab-panther-2@3x.jpg 3x
            "
              />
              <source
                media="(min-width: 1440px)"
                srcSet="
                src/assets/images/desk/desk-panther-2.jpg    1x,
                src/assets/images/desk/desk-panther-2@2x.jpg 2x,
                src/assets/images/desk/desk-panther-2@3x.jpg 3x
            "
              />
              <img
                src="src/assets/images/mob/mob-panther-2.jpg"
                alt="Panther"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>

          <LineIcon className="w-[190px] md:w-[336px] lg:w-[320px]" />

          <div className="mt-[14px] flex w-[190px] justify-between md:w-[336px] lg:w-[320px]">
            <span className="text-12s">Characters</span>
            <div className="w-[110px] text-12s text-grey-50 md:w-[218px] lg:w-[195px]">
              T’Challa is the king of the secretive and highly advanced African
              nation of Wakanda - as well as the powerful warrior known as the
              Black Panther.
            </div>
          </div>

          <div className="absolute left-[10px] top-[179px] -z-10 h-[153px] w-[170px] rounded-[200000px] bg-back-panther blur-[47px] md:left-[20px] md:top-[342px] md:h-[300px] md:w-[332px] lg:top-[358px]"></div>
        </div>
      </div>
    </section>
  );
};
