import React, { useState } from 'react';

const BASE_URL = "https://auth-backend-n3pq.onrender.com/api/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg('Both email and password are required.');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Login successful!'); // ✅ Alert notification instead of green box
        setErrorMsg('');
        setEmail('');
        setPassword('');

        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        // No redirect
      } else {
        setErrorMsg(data.error || 'Invalid credentials.');
      }
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0" style={{ width: '100%', maxWidth: '420px' }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Login</h3>
        <form onSubmit={handleLogin}>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-end mb-3">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">Login</button>

          <div className="text-center mt-3">
            <small>Don’t have an account? <a href="/register">Register here</a></small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
