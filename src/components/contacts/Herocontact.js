import React from "react";
import "./herocontact.scss";
import { images } from "../../images";

const Hero = () => {
  return (
    <div>
      <div className="heros">
        <div className="right-top-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_right} alt="" />
          </picture>
        </div>
        <div className="heros__wrapper container">
          <div className="heros__content">
            <h1 className="title">Contact Us</h1>
            <p className="hero__text mb-8 lg:mb-16 font-light text-center sm:text-3xl">
            Got a technical issue? Want to send feedback about a beta feature?<br/> Need details about our Business plan? Let us know.
          </p>
            {/* <button className="btn">View Plans</button> */}
          </div>
          <div className="heros__image">
            <picture>
              <source media="(max-width:767px)" srcSet={images.intro_mobile} />
              <img src={images.about} alt="" />
            </picture>
          </div>
        </div>

        <div className="left-bottom-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_left_mobile}
            />
            <img src={images.intro_left} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
