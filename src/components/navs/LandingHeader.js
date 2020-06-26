import React from "react";

const LandingHeader = () => {
  const imgURL =
    "https://moon.nasa.gov/system/resources/detail_files/187_detail_as11-44-6551_orig.jpg";
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
          Book Vacations to Different Lunar Destinations
        </h1>
      </div>
    </>
  );
};

export default LandingHeader;
