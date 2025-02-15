import React from "react";
import Title from "./Title";


const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
      Trendy Apparel Picks
      </Title>
      <p className="text-sm text-center text-lightColor/90 font-medium max-w-[480px] -mt-2">
      Discover top-tier fashion and lifestyle picks designed to keep you looking sharp and feeling confident
      </p>
    </div>
  );
};

export default HomeBanner;