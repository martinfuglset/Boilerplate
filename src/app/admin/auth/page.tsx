'use client';

import { useState } from 'react';
import Table, { Thead, Tbody } from '@/components/ui/Table';

export default function AuthPage() {
  const [users, setUsers] = useState([]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => {}}
        >
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table variant="striped">
          <Thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Sign In</th>
              <th>Actions</th>
            </tr>
          </Thead>
          <Tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                <td>
                  {user.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleDateString()
                    : 'Never'}
                </td>
                <td>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}