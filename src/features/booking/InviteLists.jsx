import React from 'react';
import { FaStar, FaDollarSign, FaClock, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { FiMessageSquare, FiMail } from 'react-icons/fi';

const InviteLists = () => {
  const employee = {
    name: 'MD Alif Rahman',
    role: 'Senior Product Designer',
    rating: 4.3,
    reviews: 42,
    experience: '6 Years Experience',
    hourlyRate: '$90/hr',
    availability: 'Available Now',
    location: 'San Francisco, CA',
    skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  };

  return (
    <div className="relative max-w-xs bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Status Ribbon */}
      <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        {employee.availability}
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center">
        <div className="relative inline-block">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-md"
          />
          <MdVerified className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full p-1 text-lg" />
        </div>

        {/* Rating */}
        <div className="mt-3 flex justify-center items-center">
          <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${i < Math.floor(employee.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1 text-xs font-semibold text-gray-700">
              {employee.rating} ({employee.reviews})
            </span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">{employee.name}</h2>
          <p className="text-sm text-gray-600">{employee.role}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6">
        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <FaBriefcase className="text-blue-500 mr-2" />
            <span>{employee.experience}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaDollarSign className="text-green-500 mr-2" />
            <span>{employee.hourlyRate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaClock className="text-purple-500 mr-2" />
            <span>Flexible Hours</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            <span>{employee.location}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {employee.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
            <FiMessageSquare />
            <span>Message</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md">
            <FiMail />
            <span>Invite</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-3 text-center">
        <p className="text-xs text-gray-500">
          Last active: 2 hours ago
        </p>
      </div>
    </div>
  );
};

export default InviteLists;