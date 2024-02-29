import React from "react";

export const CharactersForm: React.FC = () => {
  return (
    <section id="charactersForm" className="px-[20px] pb-[40px] pt-[20px] md:px-[32px] md:pb-[64px] md:pt-[64px] lg:px-[289px]">
      <form
        action="#"
        className="grid grid-rows-3 gap-x-[8px] gap-y-[12px] sm:grid-cols-[169px,158px] md:grid-cols-[180px,164px,168px,168px] md:grid-rows-1 lg:grid-cols-[268px,185px,190px,170px] lg:gap-x-[16px] ss:grid-cols-[45%,55%]"
      >
        <div className="relative order-1 col-span-2 md:col-auto">
          <label htmlFor="comics" className="text-12 opacity-30 md:text-14">
            Comics
          </label>
          <input
            type="text"
            name="comics"
            id="comics"
            placeholder="Enter text"
            className="h-[46px] w-full rounded-[100px] bg-accent py-[12px] pl-[24px] pr-[46px] outline-none placeholder:text-14 placeholder:text-light focus:border-2 focus:border-accent focus:bg-input md:h-[50px] md:py-[14px]"
          />

          <svg
            viewBox="0 0 16 16"
            className="absolute bottom-[14px] right-[24px] h-[18px] w-[18px] fill-transparent stroke-current md:bottom-[16px]"
          >
            <path
              d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="relative order-2 col-span-2 md:order-3 md:col-auto">
          <label
            htmlFor="character-name"
            className="text-12 opacity-30 md:text-14"
          >
            Name Starts With
          </label>
          <input
            type="text"
            name="character-name"
            id="character-name"
            placeholder="Enter text"
            className="h-[46px] w-full rounded-[100px] border-2 border-accent bg-input py-[12px] pl-[24px] pr-[46px] outline-none placeholder:text-14 placeholder:text-light md:h-[50px] md:py-[14px]"
          />

          <svg
            viewBox="0 0 16 16"
            className="absolute bottom-[14px] right-[24px] h-[18px] w-[18px] fill-transparent stroke-current md:bottom-[16px]"
          >
            <path
              d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="order-3 sm:w-[169px] md:order-2 md:w-[164px] lg:w-[185px]">
          <label htmlFor="order" className="text-12 opacity-30 md:text-14">
            Order by
          </label>
          <select
            name="order"
            id="order"
            className="h-[46px] w-full rounded-[100px] border-2 border-accent bg-input py-[12px] pl-[24px] text-[14px] outline-none placeholder:text-light md:h-[50px] md:py-[14px] md:text-[16px]"
          >
            <option value="name" className="text-[14px] md:text-[16px]">
              Name
            </option>
            <option
              value="modified"
              className="text-[14px] md:text-[16px]"
              selected
            >
              Modified
            </option>
          </select>
        </div>

        <div className="order-4 sm:w-[158px] md:w-[168px] lg:w-[170px]">
          <label htmlFor="date" className="text-12 opacity-30 md:text-14">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="h-[46px] w-full rounded-[100px] border-2 border-accent bg-input py-[12px] pl-[24px] text-[14px] outline-none placeholder:text-light md:h-[50px] md:py-[14px] md:text-[16px]"
          />
        </div>
      </form>
    </section>
  );
};
