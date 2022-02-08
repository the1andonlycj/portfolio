import React from 'react';
import './header.css';
// import people from '../../assets/people.png'
import bitsy from '../../assets/bitsy01.png'

function Header() {
  return (
    <div className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <h1 className='gradient__text'>OK, so you're a developer with a pretty portfolio. So what?</h1>
        <p>So you have the opportunity to hire me. There are plenty of good reasons to do so—I have a Master's of Fine Arts in writing, a completion certificate from a good coding bootcamp, and I've been working with a PERN stack app that I made from scratch for the past 18 months. I am good at design and even better at making art that involves my dog.</p>

        <div className='portfolio__header-content__bitsy'>
          <p>That's her there. We call her Bitsy.</p>
          <button type="button" onClick={() => window.open('https://www.instagram.com/p/CMoD2nsH7N3/?utm_source=ig_web_copy_link')}>Click for more pup.</button>
        </div>

        {/* <div className='portfolio__header-content__people'>
          <img src={people} alt="people"/>
          <p></p>
        </div> */}

      </div>
      <div className='portfolio__header-image'>
        <img id="big-doggo" src={bitsy} alt="a cute chihuahua named Bitsy" />
      </div>
    </div>
  )
}

export default Header
