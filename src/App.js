import React from 'react';
import './App.css';
import Navigation from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Mainpage from './routes/mainpage'
import Footer from './components/footer';
import Location from './routes/location';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/onlineshop" element={<></>}></Route>
        <Route path="/review" element={<></>}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/story" element={<></>}></Route>
        <Route path="/mainpage" element={<Mainpage />}></Route>
        <Route path="/about" element={<></>}></Route>
        <Route path="/mypage" element={<></>}></Route>
        <Route path="/login" element={<></>}></Route>
        <Route path="/cs" element={<></>}></Route>
        <Route path="*" element={<>주소를 다시 확인해주세요 ^^</>}></Route>
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
