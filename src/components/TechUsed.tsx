import React from "react";

const TechUsed = ({ tech }) => {
  return (
    <div
      className="bg-gradient-rainblue text-deep-blue rounded-sm font-semibold
    text-center hover:text-white transition duration-500 font-roboto"
    >
      {tech}
    </div>
  );
};

export default TechUsed;
