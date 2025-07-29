import { React, useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-amber-900">User Profile</h1>
          <p className="mt-2 text-lg text-amber-800">Manage your account information</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-amber-200">
          <div className="p-8">
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-3 rounded-full">
                <svg className="w-12 h-12 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-amber-900">{userData?.name || 'User'}</h2>
                <p className="text-amber-700">{userData?.email}</p>
              </div>
            </div>

            <div className="border-t border-amber-200 pt-6">
              <h3 className="text-lg font-medium text-amber-900 mb-4">Account Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-amber-600">User ID</p>
                  <p className="mt-1 text-sm text-amber-900">{userData?.userId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-600">Name</p>
                  <p className="mt-1 text-sm text-amber-900">{userData?.name || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-600">Email</p>
                  <p className="mt-1 text-sm text-amber-900">{userData?.email || 'Not provided'}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/progress')}
                className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg shadow-sm hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-colors"
              >
                Progress
              </button>
              <button
                onClick={logout}
                className="px-6 py-3 bg-white text-amber-700 border border-amber-300 font-medium rounded-lg shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;