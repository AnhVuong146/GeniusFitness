import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Footer from "../../pages/Homepage/footer/Footer";
import Nav from "../../pages/Homepage/nav/Nav";

const Homepage = () => {
  return (
    <div>
      <div className="homescreen-background">
        <div className="nav-bar">
          <Nav />
          <div className="text1-overlay">
            <link rel="stylesheet" href="styles.css" />
            <link
              href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
              rel="stylesheet"
            />
            <header>
              <h1>Welcome to Genius Fitness</h1>
              <p>
                Your go-to place to build a confident and instense workout
                routine!
              </p>
            </header>
            <img
              className="homepage-img"
              src="https://nationaltoday.com/wp-content/uploads/2021/04/Fitness-Day-.jpg"
              alt="Benefits1"
            />
            <section id="Intro">
              <section className="program-introduction">
                <h2>Introduction to Genius Fitness</h2>
                <p>
                  Our fitness program is designed to help you achieve your
                  health and fitness goals through a combination of tailored
                  workouts and nutritional guidance. Whether you are a beginner
                  or an experienced fitness enthusiast, there will always be a
                  workout for everyone.
                </p>
              </section>
            </section>

            <img
              className="homepage-img"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Benefits"
            />

            <section id="Benefits">
              <section className="benefits">
                <h2>Benefits of Genius Fitness</h2>
                <ul>
                  <li>Personalized workout plans for your specific goals</li>
                  <li>
                    A specialized video instruction on how to perform your
                    exercise
                  </li>
                  <li>
                    A researched article about the exercise that introduces other variations/techniques
                  </li>
                  <li>
                    Provide connection to contact with a Professional
                  </li>
                </ul>
              </section>
            </section>

            <Link to="/homepage1" className="link-button1">
              Let's get started!
            </Link>
          </div>
          <div className="Footer-bg">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
