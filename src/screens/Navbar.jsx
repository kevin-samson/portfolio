import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = (page, selectedPage, setSelectedPage) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500 cursor-pointer border-b-4 border-transparent hover:border-yellow`}
      onClick={() => {
        console.log(lowerCasePage);
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboveSmallScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <nav
      className={`z-40 w-full  fixed top-0 py-6 px-8 transition-all duration-500 rounded-b-lg ${
        isTopOfPage ? "bg-red" : ""
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="bg-yellow p-1 px-4 rounded-l-full rounded-r-full ">
          <h4 className="font-roboto text-3xl font-bold">Kevin</h4>
        </div>

        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-sans text-sm font-semibold">
            {Link("Home", selectedPage, setSelectedPage)}
            {Link("Skills", selectedPage, setSelectedPage)}
            {Link("Projects", selectedPage, setSelectedPage)}
            {Link("Contact", selectedPage, setSelectedPage)}
          </div>
        ) : (
          <button onClick={() => setIsMenuOpen((open) => !open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}

        <div
          className={`fixed right-0 bottom-0 h-full bg-white w-full  transition-all duration-500 ${
            !isAboveSmallScreen && isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex justify-end py-10 px-14">
            <button onClick={() => setIsMenuOpen((open) => !open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-current text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-10 text-4xl font-opensans font-semibold text-gray-700 h-4/6 justify-center">
            {Link("Home", selectedPage, setSelectedPage)}
            {Link("Skills", selectedPage, setSelectedPage)}
            {Link("Projects", selectedPage, setSelectedPage)}
            {Link("Contact", selectedPage, setSelectedPage)}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
