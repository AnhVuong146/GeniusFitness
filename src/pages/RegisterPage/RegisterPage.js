import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = () => {
    axios
      .post("http://127.0.0.1:5000/signup", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response.status === 401) {
          alert("Invalid credentials");
        }
      });
  };

  let imgs = [
    "https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg",
  ];

  return (
    <div>
      <form>
        <div className="background-container">
          <div className="text-overlay">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="headline">Create Your Account</p>
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

            {/* <div className="d-flex justify-content-between align-items-center">
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
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div> */}

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                className="button"
                onClick={() => registerUser()}
              >
                Sign Up
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Login to your account{" "}
                <a href="/login" className="link-button">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>

      {/* <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div> */}
    </div>
  );
}
