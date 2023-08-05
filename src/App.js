import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Homepage from "./pages/Homepage/Homepage";
import Homepage1 from "./pages/Homepage1/Homepage1";
import MaleRoutine from "./pages/MaleRoutine/MaleRoutine";
import Contact from "./pages/Contact/Contact";
import FemaleRoutine from "./pages/FemaleRoutine/FemaleRoutine";

function App() {
  return (
      <div className="container">
        {/* <h1 classNAme="page-header text-center">
          React and Python Flask Login Register
        </h1> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/homepage1" element={<Homepage1 />} />
            <Route path="/MaleRoutine" element={<MaleRoutine />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/FemaleRoutine" element={<FemaleRoutine />} />

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
