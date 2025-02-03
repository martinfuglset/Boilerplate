'use client';

export default function DesignPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Design System</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Components</h2>
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {}}
            >
              Manage Components
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Design Tokens</h2>
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {}}
            >
              Manage Tokens
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Theme Preview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-100 rounded-md">
            <div className="h-20 bg-primary rounded-md mb-2"></div>
            <p className="text-sm text-gray-600">Primary Color</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <div className="h-20 bg-secondary rounded-md mb-2"></div>
            <p className="text-sm text-gray-600">Secondary Color</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <div className="h-20 bg-accent rounded-md mb-2"></div>
            <p className="text-sm text-gray-600">Accent Color</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <div className="h-20 bg-neutral rounded-md mb-2"></div>
            <p className="text-sm text-gray-600">Neutral Color</p>
          </div>
        </div>
      </div>
    </div>
  );
}