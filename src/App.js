import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      {/* Body */}
         <div className="app__body">
            <SideBar /> 
            {/* Feed */}
            {/* Widgets */}
         </div>
    </div>
  );
}

export default App;
