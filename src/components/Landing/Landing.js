import React from 'react';
import './Landing.css';
import Model from './../../img/model.png';
import Recommendation from './../Recommendations/Recommendation';

export default function Landing() {
  return (
    <div className="Landing">
      <div
        style={{ width: '30%', marginRight: '-5rem', marginLeft: '7rem' }}
        className="Landing--Text"
      >
        TIED green v-neck shirt
      </div>
      {/* <div className="Landing--imageHighlight" /> */}
      <img
        style={{ marginLeft: '-15rem' }}
        className="Landing--Model"
        src={Model}
      />
      <div className="Landing--Rec">
        <Recommendation />
      </div>
    </div>
  );
}
