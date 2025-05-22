// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/forgot-password', { email });
      setStatus('Reset link sent to your email.');
    } catch (error) {
      setStatus('Error: ' + error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Send Reset Link
        </button>
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  );
}

export default ForgotPassword;
