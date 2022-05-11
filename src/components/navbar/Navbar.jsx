import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import neonbrain from '../../assets/neonbrain.png'


const Menu = () => (
  <>
    <p><a href="#home">Welcome</a></p>
    <p><a href="#charlie">About Me</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#features">How I Work</a></p>
    <p><a href="#callToAction">Let's Talk</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="portfolio__navbar">
      <div className='portfolio__navbar-links'>
        <div className='portfolio__navbar-links_logo'>
          <img src={neonbrain} />
        </div>
        <div className="portfolio__navbar-links_container">
          <Menu />
        </div>
        <div className='portfolio__navbar-menu'>
          {toggleMenu 
            ? <RiCloseLine color="fff" size={27} onClick={()=> setToggleMenu(false)} />
            : <RiMenu3Line color="fff" size={27} onClick={()=> setToggleMenu(true)} />
          }
          {toggleMenu &&
            <div className='portfolio__navbar-menu_container scale-up-center'>
              <div className='portfolio__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
