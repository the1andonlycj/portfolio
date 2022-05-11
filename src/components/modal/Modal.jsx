import React from 'react';
import ReactDom from 'react-dom';
import './modal.css';

const Modal = ({ project, onClose }) => {
  const _onClose = () => {
    onClose()
  }

  const gifMap = {
    mappy: "https://github.com/senhorgomes/mappy_trails/raw/master/docs/overview-my-maps.gif?raw=true",
    sureSheets: "https://github.com/meghein/sure-sheets/raw/feature/css_signin-signup/docs/gifs/SureSheetsOverview1.gif",
    renegade: "https://i.imgur.com/Ve2GAKH.gif",
  }

  return ReactDom.createPortal(
    <div className="portfolio__blog-container_modal" onClick={_onClose} >
      <div className="portfolio__modal-overlay"></div>
      <div className='portfolio__blog-container_modal inner-container'>
        <img id="portfolio__modal-image" src={gifMap[project]} />
        <button className="modal-button" onClick={_onClose}>Go back</button>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;