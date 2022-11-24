import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Header from './components/Header/index';
import About from './components/About';
import AboutImg from './components/About/AboutImg';
import AboutContent from './components/About/AboutContent';
import Error from './pages/Error';
import Plant from './pages/Plant';
import Login from './pages/Admin/Login';
import AddPlant from './pages/Admin/AddPlant/add_plant';

function App() {
  const [isMenuActive, activeMenu] = useState(false)
  return (
    <div>  
      <Header></Header><AboutImg
            onMenuClick={() => activeMenu(!isMenuActive)}
      />
       <About isMenuActive={isMenuActive} onOverLayClick={() => activeMenu(!isMenuActive)}> <AboutContent /></About>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant/:id" element={<Plant />} />
        <Route path="/error" element={<Error />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/add-plant" element={<AddPlant />} />
        <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App