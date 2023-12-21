import React from "react";

export const CharactersGallery: React.FC = () => {
  return (
    <section className="px-[20px] md:px-[32px]">
      <div className="grid grid-cols-1 grid-rows-5 gap-y-[35px] md:grid-cols-2 md:grid-rows-4 md:gap-x-[32px] md:gap-y-[32x] lg:grid-cols-4 lg:gap-x-[16px] lg:gap-y-[64px]">
        <figure>
          <img
            src="./images/gallery-photo-1.jpg"
            alt="Character photo"
            loading="lazy"
            className="h-auto w-full rounded object-cover"
          />
          <figcaption className="mt-[16px] text-18s font-medium">
            Black Widow
          </figcaption>
        </figure>

        <figure>
          <img
            src="./images/gallery-photo-2.jpg"
            alt="Character photo"
            loading="lazy"
            className="h-auto w-full rounded object-cover"
          />
          <figcaption className="mt-[16px] text-18s font-medium">
            Nebula
          </figcaption>
        </figure>

        <figure>
          <img
            src="./images/gallery-photo-3.jpg"
            alt="Character photo"
            loading="lazy"
            className="h-auto w-full rounded object-cover"
          />
          <figcaption className="mt-[16px] text-18s font-medium">
            Maria Hill
          </figcaption>
        </figure>

        <figure>
          <img
            src="./images/gallery-photo-4.jpg"
            alt="Character photo"
            loading="lazy"
            className="h-auto w-full rounded object-cover"
          />
          <figcaption className="mt-[16px] text-18s font-medium">
            Ajak
          </figcaption>
        </figure>

        <figure>
          <img
            src="./images/gallery-photo-5.jpg"
            alt="Character photo"
            loading="lazy"
            className="h-auto w-full rounded object-cover"
          />
          <figcaption className="mt-[16px] text-18s font-medium">
            Attuma
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
