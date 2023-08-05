import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logInUser = () => {
    if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (password.length === 0) {
      alert("password has left Blank!");
    } else {
      axios
        .post("http://127.0.0.1:5000/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          //console.log(response.data);
          navigate("/homepage");
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });
    }
  };

  let imgs = [
    "https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg",
  ];

  return (
    <div>
      {/* <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div> */}
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="background-container">
            <div className="text-overlay">
              <div className="headline">
                <p className="lead fw-normal mb-0 me-3">
                  Log Into Your Account
                </p>
              </div>

              <div className="headline1">
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="form3Example3"
                  className="input-text"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="headline2">
                <label className="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="form3Example4"
                  className="input-text"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="link-button">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="button" onClick={logInUser}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/register" className="link-button">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
