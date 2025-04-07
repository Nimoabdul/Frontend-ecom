import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // You can clear session storage or tokens here
    alert('Signed out!');
    navigate('/');
  }, [navigate]);

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2 className="auth-title">Signing out...</h2>
      </div>
    </div>
  );
};

export default SignOut;
