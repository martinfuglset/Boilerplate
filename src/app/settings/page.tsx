'use client';

import Header from '@/components/ui/Header';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Profile & Settings</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {/* Profile Section */}
          <div>
            <Header variant="h2" className="mb-4">Profile Information</Header>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-gray-200"></div>
                <div>
                  <h2 className="text-xl text-[#005187]">User Name</h2>
                  <p className="text-sm text-[#005187]">user@example.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#005187]">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#005187]">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="your.email@example.com"
                    disabled
                  />
                </div>

                <button
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => {}}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div>
            <Header variant="h2" className="mb-4">Preferences</Header>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm text-[#005187]">Email Notifications</label>
                  <p className="text-sm text-[#005187]">Receive email updates about your account</p>
                </div>
                <button
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200"
                  role="switch"
                  onClick={() => {}}
                >
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm text-[#005187]">Dark Mode</label>
                  <p className="text-sm text-[#005187]">Use dark theme across the application</p>
                </div>
                <button
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200"
                  role="switch"
                  onClick={() => {}}
                >
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div>
            <Header variant="h2" className="mb-4">Security</Header>
            <div className="space-y-4">
              <button
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {}}
              >
                Change Password
              </button>
              <button
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {}}
              >
                Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}