import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LandingPage from './components/View/LandingPageDogs';
import HomePage from './components/View/HomePageDogs';
import FormPage from './components/View/FormPageDogs';
import DetailPage from './components/View/DetailPageDogs';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/form' element={<FormPage/>}/>
      <Route path='/detailPage/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
  );
};

export default App;

