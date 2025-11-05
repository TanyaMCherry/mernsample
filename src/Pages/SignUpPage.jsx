import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/AuthPage.css";
import b from "../assets/images/b1.avif";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // On mount, clear the fields
    setEmail("");
    setPassword("");
    setName("");
  }, []);

  const validateName = (name) => name.trim().length > 2;

  const validateEmail = (email) => email.includes("@");

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      setError("Name must be at least 3 characters long.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email. It must contain '@'.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, contain 1 uppercase letter, 1 digit, and 1 special character."
      );
      return;
    }

    // ✅ Save credentials in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    setError("");
    alert("Sign-up successful!");
    navigate("/");
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
        <h2>Create Your Account</h2>
        <p>Sign up to explore the latest fashion trends</p>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="auth-button">
            Sign Up
          </button>

          <div className="auth-links">
  <p>
  Already have an account?{" "}
  <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    navigate("/");
  }}
>
  Sign In
</a>

</p>

</div>  

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
