import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from '../../pages/Landing';


export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      {/* <Header />
      <Main /> */}
    </div>
  );
}
