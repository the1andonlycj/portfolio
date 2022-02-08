import React from 'react';

import { Footer, Projects, Possibility, Features, Charlie, Header } from './containers';
import { Git, Brand, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg"> 
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Charlie />
      <Git />
      <Projects />
      <Features />
      <Possibility />
      <Footer />
    </div>
  )
}

export default App