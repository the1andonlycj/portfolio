import React from 'react';
import { Feature } from '../../components';
import './charlie.css';

function Charlie() {
  return (
    <div className='portfolio__charlie section__margin' id="charlie">
      <div className='portfolio__charlie-feature '> 
        <Feature title="I'm quite good in a lot of ways." text="But I'm pretty hard to explain. Made in America, California to be exact, I spent some time teaching English in Japan where I ran into a Canadian who lured me away to the frozen north. I live and work in Canada legally (don't worry!), but I've brought a world's worth of experience with me."/>
      </div>
      <div className='portfolio__charlie-heading'>
        <h1 className='gradient__text'>Seriously, if I told you about my life, you'd think I was lying.</h1>
        <p>But here are some highlights, since you came all this way:</p>
      </div>
      <div className='portfolio__charlie-container'>
        <Feature title="Neurology" text="I was the Web-Editor for Stanford's Neuroscience Department. I got the job because I knew enough about brain science to talk to the doctors and enough about programming to put their work into words for the web."/>
        <Feature title="Teaching" text="I studied neuroscience concepts to become a better educator—to know what was going on in someone's head before they said it. I bring that knowledge to programming, talking, and every design decision I make."/>
        <Feature title="Ultimate" text="I threw a frisbee tournament in Japan. When I'm not injured, I'm pretty obsessed with the sport. I had an article published in Sky'd Magazine about it. (This trivia included as proof of strangeness, not necessarily hireability.)"/>
      </div>
    </div>
  )
}

export default Charlie