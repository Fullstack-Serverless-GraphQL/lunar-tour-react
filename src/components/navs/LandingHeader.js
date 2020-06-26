import React from "react";

const LandingHeader = ({ imgURL, text }) => {
  return (
    <>
      <div
        class=" text-center bg-transparent "
        style={{
          background: `url(${imgURL})no-repeat center center`,
          backgroundSize: "cover",
          height: "570px",
          marginTop: "-85px",
        }}
      >
        <h1 class="text-white font-display text-5xl pt-44 s:text-4xl">
          {text}
        </h1>
      </div>
    </>
  );
};

export default LandingHeader;
