import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg('Both email and password are required.');
      setSuccessMsg('');
      return;
    }

    setErrorMsg('');
    setSuccessMsg('✅ Login successful!');
    setTimeout(() => {
      navigate('/register'); // just redirecting somewhere
    }, 1000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0" style={{ width: '100%', maxWidth: '420px' }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Login</h3>
        <form onSubmit={handleLogin}>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

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
