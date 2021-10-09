import React from 'react';
import { RecommendationData } from '../../data/RecommendationData';
import './Recommendation.css';

function RecommendationComponent(props) {
  return (
    <div className="Recommendation--Card">
      <div>
        <h3>{props.name}</h3>
        <p>${props.price}</p>
      </div>
      <img className="Recommendation--CardProductImage" src={props.url} />
    </div>
  );
}

export default function Recommendation() {
  return <div>{RecommendationData.map(RecommendationComponent)}</div>;
}
