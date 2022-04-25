import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'


function App() {
  const pages = ['Diccionarios', 'Torneos'];
  const [activeTab, setActiveTab] = React.useState(pages[0]);

  const handleTab = (tab) => {
    setActiveTab(tab);
  }
  
  return (
    <main>
      <Header pages={pages} handleTab={handleTab} />
      <Home activeTab={activeTab}/>
      <Footer />
    </main>
  );
}

export default App;
