import React from 'react';

import './ProductDetails.css';
import Model from './../../img/model.png';
import Model2 from './../../img/model2.png';
import Model3 from './../../img/model3.png';
import blob from './../../img/blob.svg';

function changeImage(f) {
  var currImage = f.target.getAttribute('src');
  var e = document.getElementById('ProductDetails--ModelImage');
  console.log(e.getAttribute('src'));
  console.log('CurrImage: ' + currImage);
  e.target.setAttribute('src', currImage);
}

export default function ProductDetails() {
  return (
    <div className="ProductDetails">
      <div className="ProductDetails--Content">
        <h1 className="ProductDetails--ContentHeading">
          tied green v-neck shirt
        </h1>
        <h2 className="ProductDetails--ContentPrice">$67</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <p style={{ width: '70%' }}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <btn className="ProductDetails--Btn">ADD</btn>
        </div>

        <div>
          <h2
            style={{
              marginTop: '2rem',
              fontSize: '2rem',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}
          >
            Select size
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
              width: '10rem',
            }}
          >
            <btn className="ProductDetails--SizeBtn">S</btn>
            <btn className="ProductDetails--SizeBtn">M</btn>
            <btn className="ProductDetails--SizeBtn">L</btn>
            <a style={{ cursor: 'pointer', color: 'GrayText' }}>SIZE GUIDE</a>
          </div>
          <div
            style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row' }}
          >
            <img
              className="ProductDetails--ModelAlternateImages"
              src={Model2}
            />
            <img
              className="ProductDetails--ModelAlternateImages"
              src={Model3}
              onClick={changeImage}
            />
            <img
              className="ProductDetails--ModelAlternateImages"
              src={Model2}
              onClick={changeImage}
            />
            <img
              className="ProductDetails--ModelAlternateImages"
              src={Model}
              onClick={changeImage}
            />
          </div>
          <></>
        </div>
      </div>
      <div className="ProductDetails--Image">
        <div className="Landing--bg">
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#D5E2AE"
              d="M53.4,-73.4C67.9,-63,77.5,-45.6,83.6,-27.1C89.6,-8.6,92.2,11.1,86.5,27.9C80.8,44.8,66.8,58.8,51.1,70.2C35.3,81.5,17.6,90.2,0.1,90.1C-17.5,90,-35,81.2,-49.3,69.3C-63.5,57.5,-74.5,42.6,-80.3,25.8C-86,9.1,-86.6,-9.6,-81.9,-27.4C-77.3,-45.3,-67.4,-62.2,-52.8,-72.7C-38.3,-83.1,-19.2,-87.1,0.1,-87.3C19.4,-87.5,38.9,-83.9,53.4,-73.4Z"
              transform="translate(80 100)"
            />
          </svg> */}
          <img
            itemType="image/svg+xml"
            style={{ transform: 'translate(-80px,0)' }}
            src={blob}
          />
        </div>
        <img
          id="ProductDetails--ModelImage"
          className="ProductDetails--ModelImage"
          src={Model2}
        />
      </div>
    </div>
  );
}
