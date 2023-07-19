import React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./screens/Navbar.jsx";
import DotGroup from "./screens/DotGroup.jsx";
import MySkills from "./screens/MySkills.jsx";
import Landing from "./screens/Landing.jsx";
import Projects from "./screens/Projects.jsx";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(false);
  const isAboveMediumScreen = useMediaQuery({
    query: "(min-width: 1060px)",
  });

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app bg-deep-blue ">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      <div className="md:w-5/6 mx-auto md:h-full w-full">
        <Landing setSelectedPage={setSelectedPage} />
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>

      <div className="md:w-5/6 mx-auto md:h-full w-full">
        <MySkills />
      </div>

      <div className="md:w-5/6 mx-auto ">
        <Projects />
      </div>
    </div>
  );
};

export default App;
