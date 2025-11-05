import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/AuthPage.css";
import b from "../assets/images/b1.avif";

const AuthPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Clear input fields when page loads
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const validateEmail = (email) => email.includes("@");

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (!validateEmail(email)) {
      setError("Enter a valid email id.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, contain atleast 1 uppercase letter, 1 digit, and 1 special character."
      );
      return;
    }

    if (email !== storedEmail || password !== storedPassword) {
      setError("Email or Password is incorrect.");
      return;
    }

    setError("");

    // Save credentials to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Sign-in successful!");
    navigate("/home");
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${b})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="auth-box">
        <h2 className="auth-title">
          WELCOME TO W<span className="lowercase">ardrobe</span>X
        </h2>
        <p>Sign in to explore the latest fashion trends</p>

        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button
            type="button"
            className="auth-button"
            onClick={() => {
              const storedEmail = localStorage.getItem("userEmail");
              const storedPassword = localStorage.getItem("userPassword");

              if (!validateEmail(email)) {
                setError("Invalid email. It must contain '@'.");
                return;
              }
              if (!validatePassword(password)) {
                setError(
                  "Password must be at least 8 characters long, contain atleast 1 uppercase letter, 1 digit, and 1 special character."
                );
                return;
              }
              if (email !== storedEmail || password !== storedPassword) {
                setError("Email or Password is incorrect.");
                return;
              }

              setError("");
              alert("Sign-in successful!");
              navigate("/home");
            }}
          >
            Sign In
          </button>

          <div className="auth-links">
  <a href="#" onClick={() => navigate("/forgot-password")}>Forgot Password?</a>
  <p>
    Don't have an account?{" "}
    <a href="#" onClick={() => navigate("/signup")}>Sign Up</a>
  </p>
</div>

        </form>
      </div>
    </div>
  );
};

export default AuthPage;
