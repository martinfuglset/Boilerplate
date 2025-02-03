'use client';

import Table, { Thead, Tbody } from '@/components/ui/Table';

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

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">UI Components</h2>
        
        <div className="space-y-8">
          {/* Buttons Section */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">Buttons</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Primary Button
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Secondary Button
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Danger Button
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Success Button
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">Tables</h3>
            <Table variant="striped" size="sm">
              <Thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </Thead>
              <Tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Active</td>
                  <td>Admin</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Inactive</td>
                  <td>User</td>
                  <td>Edit</td>
                </tr>
              </Tbody>
            </Table>
          </div>

          {/* Form Elements Section */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Text Input</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Textarea</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Enter description"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Checkbox</label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">Remember me</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}