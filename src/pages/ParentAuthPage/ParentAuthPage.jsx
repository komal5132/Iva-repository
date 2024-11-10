import React, { useState } from 'react';
import './ParentAuthPage.css';

const ParentAuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleTab = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="parent-auth-page">
            <div className="form-container">
                {/* Tab Navigation */}
                

                {/* Form Content */}
                {isLogin ? (
                    // Login Form
                    <form className="login-form">
                        <h2>Parent Login</h2>
                        <div className="form-tabs">
                    <div className={`form-tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>
                        Login
                    </div>
                    <div className={`form-tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>
                        Sign Up
                    </div>
                </div>
                        <input type="text" placeholder="Admission No" required />
                        <input type="password" placeholder="Password" required />                        
                        <button type="submit" className="submit-button">Log In</button>
                        <div className="form-options">                            
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        <p className="toggle-form-text">New to Kids Valley? <span onClick={toggleTab}>Sign up here</span></p>
                    </form>
                ) : (
                    // Sign-Up Form
                    <form className="signup-form">
                        <h2>Parent Sign Up</h2>
                        <div className="form-tabs">
                    <div className={`form-tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>
                        Login
                    </div>
                    <div className={`form-tab ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>
                        Sign Up
                    </div>
                </div>
                        <input type="text" placeholder="Name of Student" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Phone Number" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />                                                                        
                        <button type="submit" className="submit-button">Sign Up</button>
                        <p className="toggle-form-text">Already have an account? <span onClick={toggleTab}>Log in here</span></p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ParentAuthPage;
