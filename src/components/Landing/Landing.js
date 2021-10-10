import React from 'react';
import './Landing.css';
import Model from './../../img/model.png';
import Model2 from './../../img/model2.png';
import Recommendation from './../Recommendations/Recommendation';

export default function Landing() {
  return (
    <div
      style={{
        marginTop: '-35rem',
        // zIndex: '-999',
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
        style={{ transform: 'translate(-150px, 400px' }}
        className="Landing--Btn"
      >
        +
      </button>
      <div className="Landing">
        <div
          style={{ width: '30%', marginRight: '-5rem', marginLeft: '7rem' }}
          className="Landing--Text"
        >
          TIED green v-neck shirt
        </div>

        <img
          style={{ marginLeft: '-15rem' }}
          className="Landing--Model"
          src={Model}
        />

        <div className="Landing--Rec">
          <Recommendation />
        </div>
      </div>
    </div>
  );
}
