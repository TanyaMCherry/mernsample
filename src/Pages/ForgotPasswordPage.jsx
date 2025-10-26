import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ProductPage.css";
import b from "../assets/images/b1.avif";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long, contain 1 uppercase letter, 1 digit, and 1 special character."
      );
      return;
    }

    // ✅ Update password in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Password reset successful!");
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
        <h2>Forgot Password</h2>

        <form onSubmit={handleResetPassword}>
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-button">Reset Password</button>
        </form>

        <p className="auth-links">
          <a onClick={() => navigate("/")}>Back to Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
