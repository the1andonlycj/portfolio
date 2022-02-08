import React from 'react';
import './git.css';

const Git = () => {
  return (
    <div className='portfolio__git'>
      <div className='portfolio__git-content'>
        <p>If you want projects without commentary, you're welcome to check my Github.</p>
        <h3>This button will take you straight to the source:</h3>
      </div>
      <div className='portfolio__git-btn'>
          <button type="button" onClick={() => window.open('https://github.com/the1andonlycj')}>To Github!</button>
        </div>
    </div>
  )
}

export default Git