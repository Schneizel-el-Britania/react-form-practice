import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
