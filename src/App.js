import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/homePage/home';
import Header from "./components/header/header";
function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <HomePage />
    </div>
    </BrowserRouter>
  );
}

export default App;
