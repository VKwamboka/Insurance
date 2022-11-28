import React from "react";
import './herosprice.scss'
import { images } from "../../images";

const Hero = () => {
  return <div>
    <div className="herosprice">
      <div className="right-top-image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_right_mobile}/>
          <img src={images.intro_right} alt=''/>
        </picture>
      </div>
      <div className="herosprice__wrapper container">
        <div className="herosprice__content">
          <h1 className="title">Pricing Plans</h1> 
          <p className="heroprice__text">
            Get your health insurance coverage easier and faster. We blend Our
            expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
          </p>
            {/* <button className="btn">View Plans</button> */}
        </div>
        <div className="herosprice__image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_mobile}/>
          <img src={images.about} alt=''/>
        </picture>
      </div>
      </div>
     
      <div className="left-bottom-image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_left_mobile}/>
          <img src={images.intro_left} alt=''/>
        </picture>
      </div>
    </div>

  
  </div>;
};

export default Hero;

