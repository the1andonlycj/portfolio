import React from 'react';
import './possibility.css';
import weddingcharlie from '../../assets/weddingcharlie.jpg'

function Possibility() {
  return (
    <div className='portfolio__possibility section__padding' id="callToAction">
      <div className='portfolio__possibility-image'>
        <img src={weddingcharlie} alt="wedding day me" />
      </div>
      <div className='portfolio__possibility-content'>
        <h4>You're still here?</h4>
        <h1 className='gradient__text'>Thanks for scrolling. Do you have any questions for me?</h1>
        <p>While I am happy to work on nearly any problem-solving task, I really do love making interactive elements for a popular audience more than I like the details of the deep back end. I like to help people understand why they're at a site—and how to use it better through intuitive design. You came here to check me out—and the fact that you've made it this far means I didn't do a bad job on that front. If you think I'm a good fit for your company, please check me out on LinkedIn, or respond to the posting I applied for. Chances are you're here because I invited you, so let's just keep going with your protocols. </p>
        <button className="red-button" type="button" onClick={() => window.open('https://www.linkedin.com/in/charlie-hayes-8b9511223/')}>Back to LinkedIn—Let me show you what I can do.</button>
      </div>
    </div>
  )
}

export default Possibility