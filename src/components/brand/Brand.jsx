import React from 'react';
import './brand.css';
import { bitsbaseball, bitscloudfox, bitsdonkeykong, bitsduckhunt, bitsmariokart, bitsmetroid } from './imports';

const Brand = () => {
  return (
    <div className="section_padding">
      <div className='portfolio__brand'>
        <div>
          <img className="bitsy" src={bitsbaseball} alt="Bitsy knows baseball." />
        </div>
        <div>
          <img className="bitsy" src={bitscloudfox} alt="Bitsy knows Starfox." />
        </div>
        <div>
          <img className="bitsy" src={bitsdonkeykong} alt="Bitsy knows Donkey Kong." />
        </div>
        <div>
          <img className="bitsy" src={bitsduckhunt} alt="Bitsy knows Duck Hunt." />
        </div>
        <div>
          <img className="bitsy" src={bitsmetroid} alt="Bitsy knows Metroid." />
        </div>
        <div>
          <img className="bitsy" src={bitsmariokart} alt="Bitsy knows Mario Kart." />
        </div>
      </div>
      <h1 className='gradient__text' id="bitsy-text">The mashup icons above were made for a baseball/videogame/meme culture side project.</h1>
    </div>
  )
}

export default Brand
