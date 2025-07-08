import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !role) {
      setErrorMsg('All fields are required.');
      setSuccessMsg('');
      return;
    }

    setErrorMsg('');
    setSuccessMsg('🎉 Registered successfully!');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0" style={{ width: '100%', maxWidth: '420px' }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Create Account</h3>
        <form onSubmit={handleSubmit}>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          {/* Username Field */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Role Select */}
          <div className="mb-3">
            <label className="form-label">Select Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Choose your role</option>
              <option value="buyer">Buyer</option>
              <option value="tenant">Tenant</option>
              <option value="owner">Owner</option>
              <option value="general">General User</option>
              <option value="admin">Admin</option>
              <option value="creator">Content Creator</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">Register</button>

          <div className="text-center mt-3">
            <small>Already have an account? <a href="/login">Login here</a></small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
