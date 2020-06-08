import React from 'react';
import './css/App.css';
import Header from './Header.js'
import Hero from './Hero.js'
import ChangeMembers from './ChangeMember.js'
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <ChangeMembers/>
    </div>
  );
}

export default App;
