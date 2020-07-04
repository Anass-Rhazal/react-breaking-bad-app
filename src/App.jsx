import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouters from './router'
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="App" >
        <BrowserRouter>
          <NavBar />
          <AppRouters />
        </BrowserRouter>
    </div>
  );
}

export default App;