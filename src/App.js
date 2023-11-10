import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/homePage/home';
import Header from "./components/header/header";
function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Header />
        <Routes>
        <Route path="Projects/" element={<HomePage />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
