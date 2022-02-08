import React, { useEffect } from 'react';
import { useState } from 'react';
import { Article, Modal } from '../../components';
import {mappytrailsproject, neonrenegadeproject, suresheetsproject, } from './imports'
import './projects.css';

function Projects() {
  const [modalDetails, setModalDetails] = useState({isOpen: false, content: ""})

  const onOpenModal = (content) => {
    console.log("CONTENT?", content)
    setModalDetails({isOpen: true, content: content})
  }

  const onCloseModal = () => {
    setModalDetails({isOpen: false, content: ""})
  }

  const articleMap = [
    {name: "Neon Renegade", imgURL: neonrenegadeproject, date: "September 2020-November 2021", content: "renegade", text: "Neon Renegade is an attempt at uprooting the current online education system. Long story short, we have the tools to be responsive to students' needs as well as the tools to push them to want to know more. As a full PERN stack app, Renegade is the best I have achieved since finishing bootcamp. At the outset, I had some help from Meg Hein in establishing a water-tight reducer, but, since then, I have blazed this glowing trail alone."}, 
    {name: "Sure Sheets", imgURL: suresheetsproject, date: "Bootcamp Final Project, August 2020", content: "sureSheets", text: "In times of COVID, I envisioned a new kind of learning tool that would allow students to better leverage the materials they receive in class. With Tesseract OCR and Canva, as well as a spate of handmade elements (including a chatbot and hand-drawn designs), Sure Sheets turned out to be a beautiful send-off for our bootcamp days. This project was made with my bootcamp comrades Bryan Gomes and Meg Hein."},
    {name: "Mappy Trails", imgURL: mappytrailsproject, date: "Bootcamp Midterm Project, July 2019", content: "mappy", text: "Mappy Trails uses the Google Maps API to craft a space where people can store their own information about local places. I designed the color palette and interaction to be friendly yet adventurous. I designed the color palette and interaction to be friendly yet adventurous. Log in, save places, and share them with friends. This project was made with my bootcamp comrades Bryan Gomes and Hannah Bregman."}, 
    
  ]

  return (
    <>
        (<div className='portfolio__projects section__padding' id="projects">
          <div className='portfolio__projects-heading'>
            <h1 className='gradient__text'>These are my projects of note thus far as well as what I love about them:</h1>
          </div>
          <div className='portfolio__projects-container'>
            {articleMap.map((article) => 
              <Article imgURL={article.imgURL} date={article.date} name={article.name} content={article.content} text={article.text} onClick={onOpenModal} />
            )}
          </div>
        </div>) 
        <div>
          {modalDetails.isOpen && (<Modal project={modalDetails.content} onClose={onCloseModal}/>) }
        </div>
    </>
  )
}

export default Projects
