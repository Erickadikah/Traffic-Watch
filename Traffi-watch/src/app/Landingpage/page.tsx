import React from "react";
import { Navbar } from "../Navbar/page";
import { HeroContent } from "./banner";
import Services from "./index";
import Footer from "../Footer/index";
import Data from "../InfoSection/page";


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto border-r-8 pt-0" style={{ marginTop: "-7.5rem" }}>
        <HeroContent />
        <Services />
        <Data />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
