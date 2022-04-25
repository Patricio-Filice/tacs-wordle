import * as React from 'react';
import Tournaments from './Tournaments'

const Home = ({ activeTab }) => {

  if (activeTab === 'Diccionarios')
    return (
      <p>{activeTab}</p>
    );

  if (activeTab === 'Torneos')
    return (
      <Tournaments></Tournaments>
    );




}

export default Home;
