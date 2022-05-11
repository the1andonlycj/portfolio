import React from 'react';
import { useState } from 'react';
import './article.css';

const Article = ({ imgURL, date, text, content, onClick }) => {
  const [showWhat, setShowWhat] = useState("home");

  const _onClick = () => {
    onClick(content)
  }
  
  return (
    <div className="portfolio__blog-container_article" onClick={_onClick}>
      <div className="portfolio__blog-container_article-image">
        <img src={imgURL} alt="project image" />
      </div>
      <div className='portfolio__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h4>{text}</h4>
        </div>
        <p>Click to see a quick demo.</p>
      </div>
    </div>
  )
}

export default Article;