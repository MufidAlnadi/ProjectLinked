import React from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-center">
            <img
              className="w-20 h-20 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-800">Personal Information</h2>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-sm text-gray-900">John Doe</p>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-sm text-gray-900">john.doe@example.com</p>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <p className="mt-1 text-sm text-gray-900">New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
