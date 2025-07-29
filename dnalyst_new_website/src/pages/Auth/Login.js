import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    try {
      console.log('Calling login function');
      const success = await login(userId, password, navigate);
      if (success) {
        console.log('Login successful, navigating to dashboard');
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Login error caught in component:', err);
      setError(err.message || 'Failed to login. Please check your credentials.');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md lg:max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Welcome back
              </h2>
              <p className="text-gray-600 mb-8">
                Sign in to access your account
              </p>
            </div>

            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded" role="alert">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-red-700">{error}</span>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                    User ID
                  </label>
                  <div className="relative">
                    <input
                      id="userId"
                      name="userId"
                      type="text"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                      placeholder="Enter your user ID"
                      value={userId}
                      onChange={(e) => {
                        console.log('User ID changed:', e.target.value);
                        setUserId(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-xs font-medium text-orange-600 hover:text-orange-500">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        console.log('Password changed');
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/register" className="font-medium text-orange-600 hover:text-orange-500 transition duration-150">
                Register now
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;