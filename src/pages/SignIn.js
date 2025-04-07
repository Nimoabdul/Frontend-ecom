import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // You can add auth logic here
    alert('Signed in!');
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2 className="auth-title">Welcome Back</h2>
        <form onSubmit={handleSignIn} className="auth-form">
          <input type="text" placeholder="Username" required className="auth-input" />
          <input type="password" placeholder="Password" required className="auth-input" />
          <button type="submit" className="auth-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;