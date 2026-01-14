import React from "react";
import HeroLanding from "./hero";
import BannerExample from "./bannerexample";
import Subscribe from "./subscribe";

export default async function LandingModule() {
  return (
    <>
      <HeroLanding />
      <BannerExample />
      <Subscribe />
    </>
  );
}
