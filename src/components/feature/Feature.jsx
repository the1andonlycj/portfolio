import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='portfolio__features-container__feature'>
      <div className='portfolio__features-container__feature-title'>
        {/* This self-closing div creates the little light gradient that sits above the features */}
        <div />
        <h1>{title}</h1>
      </div>
      <div className='portfolio__features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
