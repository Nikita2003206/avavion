import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './css/style.css';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Header from './componets/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts/:id' element={<PostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
