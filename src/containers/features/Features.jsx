import React from 'react';
import { Feature } from '../../components';

import './features.css';

const featuresData = [
  {
    title: 'An Intuition For Design',
    text: 'This site has a few different effects, but no two things I have ever made have looked alike. I see every new project as an opportunity to learn new tools, try new color palettes, and affect others in new ways.'
  },
  {
    title: 'An Ear for Advice',
    text: 'Being a lifelong educator means that I have also been a lifelong learner—I learn from anyone and everyone who has something to teach me. If you need a teammate who will absorb like a sponge, iterate, and improve upon advice offered, I am your man.'
  },
  {
    title: 'An Artistic Linguistic',
    text: 'I speak three languages with varying levels of fluency, and have written code in half a dozen programming languages. I live to parse, interpret, and redeploy knowledge for those around me. I thrive in a team where everyone is an expert in a different field.'
  },
  {
    title: 'An Atypical Neurology',
    text: 'I see things from different perspectives and approach problems from oblique angles that others often have not considered. I am an amalgamator—one who puts the disparate pieces together for full effect—and I love what I do.'
  },
]

function Features() {
  return (
    <div className='portfolio__features section__padding' id="features">
      <div className='portfolio__features-heading'>
        <h1 className='gradient__text'>Charlie Hayes is himself a peculiar computer, but once you get to know him, you'll want him on your team.</h1>
        <p>Hire today to unlock these special features for your project:</p>
      </div>
      <div className='portfolio__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}

      </div>
      
    </div>
  )
}

export default Features
