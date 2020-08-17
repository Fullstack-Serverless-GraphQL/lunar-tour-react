import React from "react";
import { HeadingOne } from "../typography";
const LandingHeader = ({ imgURL, text = "" }) => {
  return (
    <>
      <div
        className=" text-center bg-transparent "
        style={{
          background: `url(${imgURL})no-repeat center center`,
          backgroundSize: "cover",
          height: "570px",
          marginTop: "-85px",
        }}
      >
        <HeadingOne className="text-5xl pt-44 s:text-4xl">{text}</HeadingOne>
      </div>
    </>
  );
};

export default LandingHeader;
