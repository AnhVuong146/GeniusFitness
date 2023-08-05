import React from "react";
import "./homepage1.css";
import { Link } from "react-router-dom";
import Nav from "../../pages/Homepage/nav/Nav";
import MalePic from "../../assets/malepicture.jpg"
import FemalePic from "../../assets/femalepicture.jpg"
import Footer1 from "../Footer1/Footer1";

const Homepage1 = () => {
    return (
        <div>
            <div className="homescreen1-background">
                <div className="text2-overlay">
                    <link rel="stylesheet" href="styles.css" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <header>
                        <div className="homescreen1-h1">
                            <h1>Please select your gender</h1>
                        </div>

                        <p>
                            In order to build a confident routine, each gender have a different and unique
                            exercises that targets specific area of body parts.
                        </p>
                    </header>

                    <div className="picture-container">
                        <div className="picture">
                            <img className="homepage1-img" src={MalePic} alt="First" />
                            <Link to="/MaleRoutine" className="link-button2-1">Male</Link>
                        </div>
                        <div className="picture">
                            <img className="homepage1-img1" src={FemalePic} alt="Second" />
                            <Link to="/FemaleRoutine" className="link-button2-2">Female</Link>
                        </div>
                    </div>
                </div>
                <div className="Footer-bg">
                    <Footer1 />
                </div>
            </div>

        </div>
    );
};

export default Homepage1;
