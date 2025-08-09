import React from 'react';
import {
  FiHome, FiUser, FiPlus, FiImage, FiStar,
  FiCalendar, FiDollarSign, FiBell, FiSettings,
  FiMenu, FiX
} from 'react-icons/fi';

const Sidebar = ({ activeTab, setActiveTab, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { icon: <FiHome />, label: 'Dashboard', tab: 'dashboard' },
    { icon: <FiUser />, label: 'Profile', tab: 'profile' },
    { icon: <FiPlus />, label: 'Create Post', tab: 'create' },
    { icon: <FiImage />, label: 'Gallery', tab: 'gallery' },
    { icon: <FiStar />, label: 'Reviews', tab: 'reviews' },
    { icon: <FiCalendar />, label: 'Bookings', tab: 'bookings' },
    { icon: <FiDollarSign />, label: 'Earnings', tab: 'earnings' },
    { icon: <FiBell />, label: 'Notifications', tab: 'notifications' },
    { icon: <FiSettings />, label: 'Settings', tab: 'settings' },
  ];

  return (
    <>
      <button 
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-lg"
      >
        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className={`fixed inset-y-0 left-0 transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out bg-uniqueBlue text-white w-64 z-40`}>
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-300">
          <h1 className="text-xl font-bold">ProBook</h1>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                setMobileOpen(false);
              }}
              className={`flex items-center w-full px-6 py-3 text-left ${activeTab === item.tab ? 'bg-[#09a5f1] shadow-sm bo' : 'hover:bg-indigo-600'} transition-colors duration-200`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-indigo-700">
          <div className="flex items-center">
            <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-xs text-indigo-200">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;