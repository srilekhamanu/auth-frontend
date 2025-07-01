import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setErrorMsg('All fields are required.');
      return;
    }

    setErrorMsg('');
    alert('Registered successfully ✅');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Register</h3>
        <form onSubmit={handleSubmit}>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

          <div className="mb-3">
            <label>Email address</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Select Role</label>
            <select 
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="buyer">Buyer</option>
              <option value="tenant">Tenant</option>
              <option value="owner">Owner</option>
              <option value="general">General User</option>
              <option value="admin">Admin</option>
              <option value="creator">Content Creator</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>

          <div className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
