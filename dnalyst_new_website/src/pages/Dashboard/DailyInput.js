import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DailyInput = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    breakfast: 'skipped',
    lunch: 'skipped',
    dinner: 'skipped',
    snacks: 'skipped',
    workout: 'skipped',
    sleepHours: 8,
    mood: 3,
    remarks: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Initial form state to reset to
  const initialFormState = {
    breakfast: 'skipped',
    lunch: 'skipped',
    dinner: 'skipped',
    snacks: 'skipped',
    workout: 'skipped',
    sleepHours: 8,
    mood: 3,
    remarks: '',
  };

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
    fetchDailyData();
  }, [date, currentUser, navigate]);

  const fetchDailyData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/health-data?date=${date.toISOString().split('T')[0]}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.date) {
          setFormData(data);
        } else {
          setFormData(initialFormState);
        }
      }
    } catch (error) {
      console.error('Error fetching daily data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? value : value,
    });
  };

  const handleMealStatusChange = (meal, status) => {
    setFormData({
      ...formData,
      [meal]: status,
    });
  };

  const handleWorkoutStatusChange = (status) => {
    setFormData({
      ...formData,
      workout: status,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/health-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          date: date.toISOString().split('T')[0],
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form to initial state
        setFormData(initialFormState);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const renderStatusOptions = (mealName) => (
    <div className="flex space-x-4">
      {['completed', 'partially_completed', 'skipped'].map((status) => (
        <div key={status} className="flex items-center">
          <input
            type="radio"
            id={`${mealName}-${status}`}
            name={mealName}
            value={status}
            checked={formData[mealName] === status}
            onChange={() => handleMealStatusChange(mealName, status)}
            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
          />
          <label htmlFor={`${mealName}-${status}`} className="ml-2 block text-sm text-gray-700 capitalize">
            {status.replace('_', ' ')}
          </label>
        </div>
      ))}
    </div>
  );

  const moodEmojis = ['😢', '🙁', '😐', '🙂', '😁'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Daily Health Tracker</h1>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate('/profile')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            >
              Profile
            </button>
            <button
              onClick={() => navigate('/progress')}
              className="px-4 py-2 bg-orange-600 rounded-lg shadow-sm text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            >
              View Progress
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-orange-500 focus:border-orange-500 w-full max-w-xs"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Nutrition</h2>
                    
                    <div className="space-y-5">
                      {['breakfast', 'lunch', 'dinner', 'snacks'].map((meal) => (
                        <div key={meal} className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700 capitalize">
                            {meal === 'snacks' ? 'Healthy Snacks' : meal}
                          </label>
                          {renderStatusOptions(meal)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-xl">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity & Wellness</h2>
                    
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Workout</label>
                        <div className="flex space-x-4">
                          {['completed', 'partially_completed', 'skipped'].map((status) => (
                            <div key={status} className="flex items-center">
                              <input
                                type="radio"
                                id={`workout-${status}`}
                                name="workout"
                                value={status}
                                checked={formData.workout === status}
                                onChange={() => handleWorkoutStatusChange(status)}
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                              />
                              <label htmlFor={`workout-${status}`} className="ml-2 block text-sm text-gray-700 capitalize">
                                {status.replace('_', ' ')}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700">
                          Sleep: <span className="font-semibold">{formData.sleepHours} hours</span>
                        </label>
                        <input
                          type="range"
                          id="sleepHours"
                          name="sleepHours"
                          min="0"
                          max="12"
                          step="0.5"
                          value={formData.sleepHours}
                          onChange={handleChange}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>0h</span>
                          <span>12h</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Mood: <span className="font-semibold">{formData.mood}/5</span>
                        </label>
                        <div className="flex justify-between">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleChange({ target: { name: 'mood', value: star } })}
                              className={`text-3xl ${formData.mood >= star ? 'scale-110' : 'opacity-60'} transition-all`}
                            >
                              {moodEmojis[star - 1]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Notes
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  rows={4}
                  maxLength={1000}
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Record any observations, feelings, or additional notes about your day..."
                />
                <p className="mt-1 text-xs text-gray-500 text-right">
                  {formData.remarks.length}/1000 characters
                </p>
              </div>

              <div className="flex justify-between items-center pt-4">
                {submitted && (
                  <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                    ✓ Data saved successfully!
                  </div>
                )}
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
                >
                  Save Daily Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyInput;