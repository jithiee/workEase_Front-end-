import React, { useState, useRef } from 'react';
import { FiPlus, FiX, FiCamera } from 'react-icons/fi';

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Senior Product Designer',
    bio: 'Specialized in UX/UI design with 6+ years of experience creating beautiful and functional digital products.',
    rate: '$90/hr',
    location: 'San Francisco, CA',
    skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Wireframing'],
    availability: 'available',
    profileImage: 'https://randomuser.me/api/portraits/men/75.jpg'
  });

  const [newSkill, setNewSkill] = useState('');
  const fileInputRef = useRef(null);

  const availabilityOptions = [
    { value: 'available', label: 'Available', color: 'bg-green-100 text-green-800' },
    { value: 'unavailable', label: 'Unavailable', color: 'bg-red-100 text-red-800' }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile({...profile, profileImage: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="relative mx-auto w-32 h-32">
              <img 
                src={profile.profileImage} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button 
                onClick={triggerFileInput}
                className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                <FiCamera size={16} />
              </button>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-gray-600">{profile.title}</p>
              
              {/* Availability Status Badge */}
              <div className="mt-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${availabilityOptions.find(opt => opt.value === profile.availability)?.color}`}>
                  {availabilityOptions.find(opt => opt.value === profile.availability)?.label}
                </span>
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

            {/* Availability Status Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability Status</label>
              <div className="flex flex-wrap gap-2">
                {availabilityOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setProfile({...profile, availability: option.value})}
                    className={`px-4 py-2 rounded-lg border ${profile.availability === option.value 
                      ? `${option.color} border-current` 
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Management */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full flex items-center">
                    {skill}
                    <button 
                      onClick={() => removeSkill(skill)}
                      className="ml-2 text-indigo-400 hover:text-indigo-600"
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a new skill"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button 
                  onClick={addSkill}
                  className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <FiPlus size={16} className="mr-1" />
                  Add
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