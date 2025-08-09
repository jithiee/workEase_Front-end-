import React from 'react';
import { FiCalendar, FiDollarSign, FiStar, FiMessageSquare } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa';

const DashboardSection = () => {
  const stats = [
    { label: 'Total Bookings', value: '24', icon: <FiCalendar />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Earnings', value: '$2,450', icon: <FiDollarSign />, color: 'bg-green-100 text-green-600' },
    { label: 'Reviews', value: '4.8', icon: <FiStar />, color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Response Rate', value: '98%', icon: <FiMessageSquare />, color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-3`}>
              {stat.icon}
            </div>
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upcoming Bookings</h3>
          <button className="text-indigo-600 text-sm font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <img 
                src="https://randomuser.me/api/portraits/women/40.jpg" 
                alt="Client" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h4 className="font-medium">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Product Design Consultation</p>
                <div className="flex items-center mt-1 text-sm">
                  <FaRegClock className="text-gray-400 mr-1" />
                  <span>Tomorrow, 10:00 AM - 11:30 AM</span>
                </div>
              </div>
              <button className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;

