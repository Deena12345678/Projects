import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from "./components/Admin/admin"
import HomePage from './components/homePage/home';
import Header from "./components/header/header";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login/login";
import { RequireAuth } from "./components/RequireAuth";
function App() {

  return (
    <AuthProvider>
     <BrowserRouter>
    <div className="App">
      
    <Header />
        <Routes>
        <Route path="Projects/" element={<HomePage />} />
        <Route path="Projects/login/" element={<Login />} />
        <Route path="Projects/admin/" element={<RequireAuth><Admin /></RequireAuth>} />
        
        </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
