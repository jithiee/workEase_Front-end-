import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Senior Product Designer',
    bio: 'Specialized in UX/UI design with 6+ years of experience creating beautiful and functional digital products.',
    rate: '$90/hr',
    location: 'San Francisco, CA',
    skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Wireframing'],
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Profile" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
              />
              <button className="absolute bottom-2 right-2 md:right-6 bg-indigo-600 text-white p-2 rounded-full">
                <FiPlus />
              </button>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-gray-600">{profile.title}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
              <input 
                type="text" 
                value={profile.title}
                onChange={(e) => setProfile({...profile, title: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea 
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate</label>
                <input 
                  type="text" 
                  value={profile.rate}
                  onChange={(e) => setProfile({...profile, rate: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full flex items-center">
                    {skill}
                    <button className="ml-2 text-indigo-400 hover:text-indigo-600">
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
                <button className="flex items-center text-indigo-600">
                  <FiPlus size={16} className="mr-1" />
                  Add Skill
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;