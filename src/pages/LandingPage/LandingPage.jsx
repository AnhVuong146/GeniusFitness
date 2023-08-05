import React from "react";
import "./Landingpage.css";
import HS from "../../assets/homescreen.jpg";
import { Link } from "react-router-dom";

// export default function LandingPage() {
const LandingPage = () => {
  return (
    // <div className="container h-100">
    // <div className="row h-100">
    <div className="background-container">
      <div className="text-overlay">
        <h1>Genius Fitness</h1>

        <Link to="/login" className="link-button">
          Login
        </Link>

        <Link to="/register" className="link-button">
          Register
        </Link>
      </div>
    </div>

    /* </div> */
    /* </div> */
  );
};

export default LandingPage;
