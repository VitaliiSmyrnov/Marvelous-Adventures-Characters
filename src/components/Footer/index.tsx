import React from "react";
import { Link } from "react-router-dom";

import { Logo, Facebook, Instagram, Twitter } from "src/components/Icons";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-wrap items-center justify-between gap-y-[20px] px-[20px] py-[40px] md:px-[32px] md:py-[64px] lg:px-[64px]">
        <Link
          to="/"
          className="inline-block h-[16px] w-[98px] md:h-[32px] md:w-[202px]"
        >
          <Logo className="h-[16px] w-[98px] md:h-[32px] md:w-[202px]" />
          <span className="sr-only">Logo</span>
        </Link>

        <span className="text-14 text-light md:text-16">Characters</span>

        <ul className="flex flex-1 basis-full gap-[14px] md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:gap-[16px]">
          <li>
            <a href="#" className="footer-social-link group">
              <Facebook className="h-4 w-4 fill-current transition-all group-hover:fill-accent md:h-5 md:w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-link group">
              <Instagram className="h-4 w-4 fill-current transition-all group-hover:fill-accent md:h-5 md:w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-social-link group">
              <Twitter className="h-4 w-4 fill-current transition-all group-hover:fill-accent md:h-5 md:w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex h-[44px] items-center justify-center bg-accent text-10 text-light text-opacity-40 md:h-[54px]">
        Privacy Policy Public Offering Agreement
      </div>
    </footer>
  );
};