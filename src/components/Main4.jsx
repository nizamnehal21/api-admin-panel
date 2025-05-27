import React, { useState } from 'react';

const Main4 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <>
      <div className="w-[82vw] mt-15 ml-[17vw]">
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Auth</h1>
            <div className="flex items-center space-x-4">
              <button className="border px-4 py-2 rounded shadow-sm bg-white">Export</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                + New Application
              </button>
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                SA
              </div>
            </div>
          </div>

          <p className="text-gray-500 mb-4">Login with API</p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mb-6 space-y-4 w-1/3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
            {token && <div className="text-green-600">Token: {token}</div>}
            {error && <div className="text-red-600">{error}</div>}
          </form>

          {/* You can conditionally render the rest of the dashboard here if needed */}
        </main>
      </div>
    </>
  );
};

export default Main4;
