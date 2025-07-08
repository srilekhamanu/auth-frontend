import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required.');
      setMessage('');
      return;
    }

    setMessage('🔗 A password reset link has been sent to your email.');
    setError('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '420px' }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Reset Your Password</h3>

        <form onSubmit={handleReset}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {message && (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          )}

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control"
              id="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Send Reset Link
          </button>

          <div className="text-center mt-3">
            <small>
              Remember your password? <a href="/login">Login here</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
