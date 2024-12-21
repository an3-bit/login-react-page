import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook } from "react-icons/fa";

export const LoginRegister = () => {
  const [action, setAction] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
  });

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;

    if (username && email) {
      setUserDetails({ username, email });
      setAction("");
      alert("Registration successful! Please log in.");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;

    if (username === userDetails.username && email === userDetails.email) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or email. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className={`wrapper ${action}`}>
          {/* Login Form */}
          <div className="form-box login">
            <form onSubmit={handleLogin}>
              <h1>
                Welcome to <br />
                <span className="unstop">Unstop</span>
              </h1>

              <div className="social-login">
                <button className="google-btn">
                  <FaGoogle className="google-icon" />
                  Login with Google
                </button>
                <button className="facebook-btn">
                  <FaFacebook className="facebook-icon" />
                  Login with Facebook
                </button>
              </div>

              {/* OR Divider */}
              <div className="or-divider">
                <span className="line"></span>
                <span className="or">OR</span>
                <span className="line"></span>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input type="email" name="email" placeholder="Email" required />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={registerLink}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="form-box register">
            <form onSubmit={handleRegister}>
              <h1>Registration</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <FaEnvelope className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <FaLock className="icon" />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  I agree to the terms & conditions
                </label>
              </div>
              <button type="submit">Register</button>
              <div className="login-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={loginLink}>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="profile-view">
          <h1>
            Welcome to <br />
            <span className="unstop">Unstop</span>
          </h1>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="profile-pic"
          />
          <p className="username">{userDetails.username}</p>
          <p className="email">{userDetails.email}</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
