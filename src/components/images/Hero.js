import React from "react";
import intro from "../../images/intro.svg";

//  pass down opacity state which is set in navigation components
//  the gatsby bg image uses 0.99 opacity which makes the full page nav
//  transparent. Use the preserveStackingContext to toggle between 0.99 & 1 opacity
const Hero = ({ home, children, opacity }) => {
    return home? (
      <div>
        {children} 
        <div className="HomeHero">
          <img src={intro} class="HomeHero__Image" />
        </div>
      </div>

    ) : (<div>{children}</div>);
};


export default Hero;
