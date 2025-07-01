import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setMessage('A password reset link has been sent to your email ✅');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Forgot Password</h3>
        <form onSubmit={handleReset}>
          {message && (
            <div className="alert alert-info">{message}</div>
          )}

          <div className="mb-3">
            <label>Email address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>

          <div className="text-center mt-3">
            Remembered your password? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
