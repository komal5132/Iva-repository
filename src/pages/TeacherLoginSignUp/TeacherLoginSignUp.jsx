import React, { useState } from 'react';
import "./TeacherLoginSignUp.css"

const TeacherLoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="teacher-form-page">
    <div className="teacher-form-container">
      <div className="form-tabs">
        <span
          className={`form-tab ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
        <span
          className={`form-tab ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </span>
      </div>

      {isLogin ? (
        <form>
          <input type="email" placeholder="Teacher Email" required />
          <input type="password" placeholder="Password" required />         
          <button type="submit" className="submit-button">Login</button>
          <div className="additional-links">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      ) : (
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Teacher Email" required />
          <input type="text" placeholder="Teacher Id" />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />          
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default TeacherLoginSignUp;
