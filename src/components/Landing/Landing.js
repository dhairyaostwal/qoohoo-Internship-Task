import React, { useState } from 'react';
import './Landing.css';
import Model3 from './../../img/model3.png';
import Model4 from './../../img/model4.jpg';
import Model2 from './../../img/model2.png';
import next from './../../img/next.svg';
import Recommendation from './../Recommendations/Recommendation';
import ProductDetails from '../ProductDetails/ProductDetails';

// function LandingToProduct() {
//   const [pressed, isPressed] = useState(false);

//   console.log('+ Button Pressed');
//   isPressed((pressed) => !pressed);
//   return !pressed ? <ProductDetails /> : null;
// }

export default function Landing() {
  return (
    <div
      style={{
        marginTop: '-35rem',
      }}
    >
      <div className="Landing--bg">
        <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D5E2AE"
            d="M53.4,-73.4C67.9,-63,77.5,-45.6,83.6,-27.1C89.6,-8.6,92.2,11.1,86.5,27.9C80.8,44.8,66.8,58.8,51.1,70.2C35.3,81.5,17.6,90.2,0.1,90.1C-17.5,90,-35,81.2,-49.3,69.3C-63.5,57.5,-74.5,42.6,-80.3,25.8C-86,9.1,-86.6,-9.6,-81.9,-27.4C-77.3,-45.3,-67.4,-62.2,-52.8,-72.7C-38.3,-83.1,-19.2,-87.1,0.1,-87.3C19.4,-87.5,38.9,-83.9,53.4,-73.4Z"
            transform="translate(200 100)"
          />
        </svg>
      </div>
      <button
        style={{ transform: 'translate(530px, 400px' }}
        className="Landing--Btn"
        // onClick={LandingToProduct}
      >
        +
      </button>
      <div className="Landing">
        <div
          style={{ width: '30%', marginRight: '-5rem', marginLeft: '7rem' }}
          className="Landing--Text"
        >
          <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M10.6,13C-1.8,27.6,-38.1,35.2,-43.8,24.5C-49.6,13.7,-24.8,-15.5,-6.6,-19.4C11.5,-23.2,23,-1.6,10.6,13Z"
              transform="translate(100 100)"
            />
          </svg>
          TIED green v-neck shirt
        </div>

        <img className="Landing--Model" src={Model2} />

        <div className="Landing--Rec">
          <Recommendation />
          <div
            style={{ transform: 'translate(50px ,0)', position: 'relative' }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FF0066"
                d="M10.6,13C-1.8,27.6,-38.1,35.2,-43.8,24.5C-49.6,13.7,-24.8,-15.5,-6.6,-19.4C11.5,-23.2,23,-1.6,10.6,13Z"
                transform="translate(100 50)"
                opacity="0.7"
              />
            </svg>
          </div>
          <img className="Landing--NextButton" src={next} />
          <div className="Landing--AlternateModel">
            <img className="Landing--Model" src={Model4} />
          </div>
        </div>
      </div>
    </div>
  );
}
