import React, { useState } from "react";
import "./AdminLoginPage.css"; // Import the CSS for styling

const AdminLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);  // Toggle state for sign up/login
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign-up logic (validate and send to backend)
    } else {
      // Handle login logic (validate and send to backend)
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-form-container">
        <h2>{isSignUp ? "Admin Sign Up" : "Admin Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-actions">
            <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
          </div>
        </form>
        <p className="toggle-text">
          {isSignUp ? "Already have an account?" : "New to the platform?"}{" "}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Login here" : "Sign Up here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
