import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}


export default App;
