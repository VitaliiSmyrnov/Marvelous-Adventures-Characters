import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "src/services/API.ts";

interface ICharacters {
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  description: string;
}

export const HomeRandom: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  // const [picture, setPicture] = useState<Picture>({});
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setStatus("pending");

      try {
        const randomCharacters = await API.getRandomCharacters();
        console.log("randomCharacters", randomCharacters);

        setCharacters(randomCharacters);
        setStatus("resolved");
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
        setStatus("rejected");
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="mb-[120px] flex flex-col px-[20px] md:mb-[192px] md:px-[32px]">
      <h2 className="mb-[44px] text-center text-28 font-medium uppercase md:mb-[64px] md:text-left md:text-44">
        Random characters
      </h2>

      <div className="mb-[20px] md:mb-[32px] lg:flex lg:gap-[32px]">
        <div className="max-h-[335px] max-w-[335px] rounded md:max-h-[704px] md:max-w-[704px] lg:min-w-[496px] lg:max-w-[496px]">
          {/* <picture>
            <source
              media="(max-width: 767px)"
              srcSet="
              src/assets/images/mob/mob-random.jpg    1x,
              src/assets/images/mob/mob-random@2x.jpg 2x,
              src/assets/images/mob/mob-random@3x.jpg 3x
          "
            />
            <source
              media="(min-width: 768px) and (max-width: 1439px)"
              srcSet="
              src/assets/images/tab/tab-random.jpg    1x,
              src/assets/images/tab/tab-random@2x.jpg 2x,
              src/assets/images/tab/tab-random@3x.jpg 3x
          "
            />
            <source
              media="(min-width: 1440px)"
              srcSet="
              src/assets/images/desk/desk-random.jpg    1x,
              src/assets/images/desk/desk-random@2x.jpg 2x,
              src/assets/images/desk/desk-random@3x.jpg 3x
          "
            />
            <img
              src="src/assets/images/mob/mob-random.jpg"
              alt="Random character"
              loading="lazy"
              className="h-full w-full rounded object-cover"
            />
          </picture> */}

          <img
            src={`${characters[0].thumbnail.path}.${characters[0].thumbnail.extension}`}
            alt="Random character"
            loading="lazy"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <div>
          <div className="border-b border-light border-opacity-20 py-[32px] lg:py-0 lg:pb-[32px] lg:pt-[45px]">
            <h3 className="text-18s font-medium text-accent-t md:text-24">
              Ant-Man
            </h3>
            <p className="mt-[14px] text-14 text-accent-t md:mt-[16px] md:text-16">
              Thief turned hero Scott Lang uses size manipulation tech to
              infiltrate bases and intimidate bad guys.
            </p>
          </div>

          <div className="border-b border-light border-opacity-20 py-[32px]">
            <h3 className="text-18s font-medium md:text-24">The Wasp</h3>
            <p className="mt-[14px] text-14 text-grey-50 md:mt-[16px] md:text-16">
              Hope Van Dyne, daughter of the brilliant and heroic Ant-Man (Hank
              Pym) and The Wasp (Janet van Dyne), helps trains her father’s
              successor Scott Lang and secure the destruction of the
              Yellowjacket technology.
            </p>
          </div>

          <div className="border-b border-light border-opacity-20 py-[32px]">
            <h3 className="text-18s font-medium md:text-24">Cassie Lang</h3>
            <p className="mt-[14px] text-14 text-grey-50 md:mt-[16px] md:text-16">
              As Scott Lang’s young daughter, Cassie is super proud of her dad’s
              heroics as Ant-Man.
            </p>
          </div>

          <div className="border-b border-light border-opacity-20 py-[32px]">
            <h3 className="text-18s font-medium md:text-24">
              Kang The Conqueror
            </h3>
            <p className="mt-[14px] text-14 text-grey-50 md:mt-[16px] md:text-16">
              The character is most frequently depicted as an opponent of the
              Avengers and the Fantastic Four.
            </p>
          </div>

          <div className="border-b border-light border-opacity-20 py-[32px]">
            <h3 className="text-18s font-medium md:text-24">Hank Pym</h3>
            <p className="mt-[14px] text-14 text-grey-50 md:mt-[16px] md:text-16">
              Hank Pym is a brilliant scientist who used his discovery of the
              shrinking Pym Particles, the suit that could survive the process,
              and insect communication waves, to turn himself into the original
              Ant-Man.
            </p>
          </div>
        </div>
      </div>

      <Link
        to="characters"
        className="inline-block w-[162px] self-end rounded-[1000px] border border-solid border-light border-opacity-30 bg-bg px-[20px] py-[10px] text-center text-12L font-medium uppercase md:w-[170px] md:px-[24px] md:py-[12px] md:text-14"
      >
        All Characters
      </Link>
    </section>
  );
};
