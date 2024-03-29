import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { HomeRandomImage } from "./HomeRandomImage/HomeRandomImage";
import { HomeRandomList } from "./HomeRandomList/HomeRandomList";
import { ICharacters } from "src/modules/IProps";

import API from "src/services/API.ts";

export const HomeRandom: FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();

    console.log("controller.signal", controller.signal);
    (async () => {
      setStatus("pending");

      try {
        const randomCharacters = await API.getRandomCharacters(
          controller.signal,
        );
        console.log("randomCharacters", randomCharacters);
        const preparedCharacters = randomCharacters
          .filter(
            (item: ICharacters) =>
              item.thumbnail.path.includes("image_not_available") !== true &&
              item.description.trim() !== "" &&
              item.description.trim() !== "&nbsp;",
          )
          .slice(0, 5)
          .map((character: ICharacters, idx: number) => ({
            ...character,
            isActive: idx === 0,
          }));
        console.log("preparedCharacters", preparedCharacters);

        setCharacters(preparedCharacters);
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

  // const handleCharacterChange = (id: number) => {
  //   const activeCharacter = characters.find((item) => item.isActive)!;
  //   if (id === activeCharacter.id) return;

  //   setCharacters((prev) =>
  //     prev.map((item) => ({
  //       ...item,
  //       isActive: item.id === id,
  //     })),
  //   );
  // };
  console.log("activeCharacter", characters);

  const changeActiveCharacter = () => {
    const activeCharacterIdx = characters.findIndex((item) => item.isActive)!;
    const nextCharacterIdx = (activeCharacterIdx + 1) % characters.length;

    setCharacters(
      characters.map((item, idx) => ({
        ...item,
        isActive: idx === nextCharacterIdx,
      })),
    );
  };

  return (
    <section className="mb-[80px] flex flex-col px-[20px] md:mb-[128px] md:px-[32px]">
      <h2 className="mb-[44px] text-center text-28 font-medium uppercase md:mb-[64px] md:text-left md:text-44">
        Random characters
      </h2>

      {status === "pending" && <p>Loading</p>}
      {status === "rejected" && <p>Oops, something wrong. {error} </p>}
      {status === "resolved" && (
        <div className="mb-[20px] flex flex-col gap-0 md:mb-[32px] lg:flex-row lg:gap-[32px]">
          <HomeRandomImage items={characters} />

          <HomeRandomList
            items={characters}
            // onCharacterChange={handleCharacterChange}
            onCharacterChange={changeActiveCharacter}
          />
        </div>
      )}

      <Link
        to="characters"
        className="inline-block w-[162px] self-end rounded-[1000px] border border-solid border-light border-opacity-30 bg-bg px-[20px] py-[10px] text-center text-12L font-medium uppercase md:w-[170px] md:px-[24px] md:py-[12px] md:text-14"
      >
        All Characters
      </Link>
    </section>
  );
};
