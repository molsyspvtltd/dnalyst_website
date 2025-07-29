import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import { format, parseISO } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const ProgressCharts = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('week');
  const [healthData, setHealthData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else {
      fetchHealthData();
    }
  }, [timeRange, currentUser, navigate]);

  const fetchHealthData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/health-data/history?range=${timeRange}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setHealthData(data);
      } else {
        throw new Error('Failed to fetch health data');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching health data:', error);
      setLoading(false);
    }
  };

  const getStatusScore = (status) => {
    switch (status) {
      case 'COMPLETED': return 1;
      case 'PARTIALLY_COMPLETED': return 0.5;
      case 'SKIPPED': return 0;
      default: return 0;
    }
  };

  // Sort all data by date in ascending order
  const sortedHealthData = [...healthData].sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  );

  const mealsData = {
    labels: sortedHealthData.map(item => parseISO(item.date)),
    datasets: [
      {
        label: 'Breakfast',
        data: sortedHealthData.map(item => getStatusScore(item.breakfast)),
        backgroundColor: 'rgba(234, 88, 12, 0.7)',
        borderRadius: 4,
      },
      {
        label: 'Lunch',
        data: sortedHealthData.map(item => getStatusScore(item.lunch)),
        backgroundColor: 'rgba(249, 115, 22, 0.7)',
        borderRadius: 4,
      },
      {
        label: 'Dinner',
        data: sortedHealthData.map(item => getStatusScore(item.dinner)),
        backgroundColor: 'rgba(251, 146, 60, 0.7)',
        borderRadius: 4,
      },
      {
        label: 'Snacks',
        data: sortedHealthData.map(item => getStatusScore(item.snacks)),
        backgroundColor: 'rgba(253, 186, 116, 0.7)',
        borderRadius: 4,
      },
    ],
  };

  const sleepMoodData = {
    labels: sortedHealthData.map(item => parseISO(item.date)),
    datasets: [
      {
        label: 'Sleep Hours',
        data: sortedHealthData.map(item => item.sleepHours),
        borderColor: 'rgba(59, 130, 246, 0.8)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        yAxisID: 'y',
      },
      {
        label: 'Mood (1-5)',
        data: sortedHealthData.map(item => item.mood),
        borderColor: 'rgba(234, 88, 12, 0.8)',
        backgroundColor: 'rgba(234, 88, 12, 0.2)',
        borderWidth: 2,
        tension: 0.3,
        yAxisID: 'y1',
      },
    ],
  };

  const workoutStats = sortedHealthData.reduce(
    (acc, item) => {
      if (item.workout === 'COMPLETED') acc.completed++;
      else if (item.workout === 'PARTIALLY_COMPLETED') acc.partiallyCompleted++;
      else acc.skipped++;
      return acc;
    },
    { completed: 0, partiallyCompleted: 0, skipped: 0 }
  );

  const totalWorkouts = sortedHealthData.length;
  const workoutCompletionPercentage =
    totalWorkouts > 0
      ? ((workoutStats.completed + (workoutStats.partiallyCompleted * 0.5)) / totalWorkouts * 100
      ) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Health Analytics</h1>
            <p className="text-gray-600 mt-1">Track your wellness journey over time</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="px-4 py-2 bg-orange-600 rounded-lg shadow-sm text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            >
              My Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold text-gray-800">Time Range Selection</h2>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-orange-500 focus:border-orange-500 min-w-[200px] transition"
            >
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Meal Consistency</h2>
                  <p className="text-gray-600 text-sm">Your meal completion patterns</p>
                </div>
                <div className="h-80">
                  <Bar
                    data={mealsData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          type: 'time',
                          time: {
                            unit: 'day',
                            tooltipFormat: 'MMM d, yyyy',
                            displayFormats: {
                              day: 'MMM d'
                            }
                          },
                          title: {
                            display: true,
                            text: 'Date'
                          }
                        },
                        y: {
                          min: 0,
                          max: 1,
                          ticks: {
                            callback: (value) => {
                              if (value === 0) return 'Skipped';
                              if (value === 0.5) return 'Partial';
                              if (value === 1) return 'Completed';
                              return '';
                            }
                          }
                        }
                      },
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                        tooltip: {
                          callbacks: {
                            label: (context) => {
                              const value = context.raw;
                              if (value === 0) return 'Skipped';
                              if (value === 0.5) return 'Partially Completed';
                              if (value === 1) return 'Completed';
                              return '';
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Sleep & Mood</h2>
                  <p className="text-gray-600 text-sm">Your sleep hours and mood correlation</p>
                </div>
                <div className="h-80">
                  <Line
                    data={sleepMoodData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      interaction: {
                        mode: 'index',
                        intersect: false,
                      },
                      scales: {
                        x: {
                          type: 'time',
                          time: {
                            unit: 'day',
                            tooltipFormat: 'MMM d, yyyy',
                            displayFormats: {
                              day: 'MMM d'
                            }
                          },
                          title: {
                            display: true,
                            text: 'Date'
                          }
                        },
                        y: {
                          type: 'linear',
                          display: true,
                          position: 'left',
                          title: {
                            display: true,
                            text: 'Sleep Hours',
                          },
                        },
                        y1: {
                          type: 'linear',
                          display: true,
                          position: 'right',
                          min: 0,
                          max: 5,
                          title: {
                            display: true,
                            text: 'Mood (1-5)',
                          },
                          grid: {
                            drawOnChartArea: false,
                          },
                        },
                      },
                      plugins: {
                        legend: {
                          position: 'top',
                        },
                        tooltip: {
                          callbacks: {
                            title: (context) => {
                              return format(parseISO(sortedHealthData[context[0].dataIndex].date), 'MMMM d, yyyy');
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Workout Performance</h2>
                <p className="text-gray-600 text-sm">Your workout completion statistics</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Completion Rate</span>
                        <span className="text-lg font-bold text-orange-600">
                          {Math.round(workoutCompletionPercentage)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
                          style={{ width: `${workoutCompletionPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm font-medium text-green-800 mb-1">Completed</p>
                    <p className="text-2xl font-bold text-green-600 mb-1">
                      {workoutStats.completed}
                    </p>
                    <p className="text-xs text-green-600">
                      {totalWorkouts > 0 ? Math.round((workoutStats.completed / totalWorkouts) * 100) : 0}%
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                    <p className="text-sm font-medium text-yellow-800 mb-1">Partial</p>
                    <p className="text-2xl font-bold text-yellow-600 mb-1">
                      {workoutStats.partiallyCompleted}
                    </p>
                    <p className="text-xs text-yellow-600">
                      {totalWorkouts > 0 ? Math.round((workoutStats.partiallyCompleted / totalWorkouts) * 100) : 0}%
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="text-sm font-medium text-red-800 mb-1">Skipped</p>
                    <p className="text-2xl font-bold text-red-600 mb-1">
                      {workoutStats.skipped}
                    </p>
                    <p className="text-xs text-red-600">
                      {totalWorkouts > 0 ? Math.round((workoutStats.skipped / totalWorkouts) * 100) : 0}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressCharts;