import { BASE_URL } from "../config";
import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMsg("Email is required.");
      setSuccessMsg('');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMsg("Reset link sent to your email ✅");
        setErrorMsg('');
        setEmail("");
      } else {
        setErrorMsg(data.message || "Failed to send reset link.");
        setSuccessMsg('');
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
      setSuccessMsg('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

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
