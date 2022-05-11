import React from 'react';

import { Footer, Projects, Possibility, Features, Charlie, Header } from './containers';
import { Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg"> 
        <Navbar />
        <Projects />
      </div>
      <Header />
      <Charlie />
      <Brand />
      <Features />
      <Possibility />
      <Footer />
    </div>
  )
}

export default App