// Here is the landing page of the vendoo site
// It will have a header, a hero section, and a footer
// The header will have the logo and the nav links
// The hero section will have a background image, a title, a subtitle, and a call to action button
// The footer will have the copyright and the social media links
import React from "react";
import VendooHeader from "../VendooHeader";
import HeroSections from "../HeroSections";

function Landing() {
  return (
    <>
      <VendooHeader />
      <HeroSections />
    </>
  );
}

export default Landing;
