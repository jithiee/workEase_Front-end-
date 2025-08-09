import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardSection from './DashboardSection';
import ProfileSection from './ProfileSection';

const EmployeeDash = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardSection />;
      case 'profile': return <ProfileSection />;
      default: return <DashboardSection />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div className="flex-1 overflow-auto md:ml-64 p-6">
        {renderActiveTab()}
      </div>
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default EmployeeDash;
