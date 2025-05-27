import React, { useEffect, useState } from 'react';

const Main3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API when component mounts
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="w-[82vw] mt-15 ml-[17vw]">
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Users</h1>
            <div className="flex items-center space-x-4">
              <button className="border px-4 py-2 rounded shadow-sm bg-white">Export</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                + New Application
              </button>
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                SA
              </div>
            </div>
          </div>

          <p className="text-gray-500 mb-4">Manage all passport applications</p>

          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-1 rounded bg-blue-100 text-blue-600 font-semibold">All Applications</button>
            <button className="px-4 py-1 rounded hover:bg-gray-100">Pending</button>
            <button className="px-4 py-1 rounded hover:bg-gray-100">In Progress</button>
            <button className="px-4 py-1 rounded hover:bg-gray-100">Completed</button>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center border rounded px-3 py-2 w-64 bg-white">
              <input className="w-full outline-none" type="text" placeholder="Search..." />
            </div>
            <select className="px-3 py-2 border rounded bg-white">
              <option>All</option>
              <option>Fresh</option>
              <option>Renewal</option>
            </select>
          </div>

          {/* Table */}
          <div className="bg-white shadow rounded">
            <div className="grid grid-cols-7 p-4 border-b text-sm font-semibold text-gray-600">
              <div>ID</div>
              <div>Name</div>
              <div>Username</div>
              <div>Email</div>
              <div>Phone</div>
              <div>City</div>
              <div>Actions</div>
            </div>

            {users.map((user) => (
              <div key={user.id} className="grid grid-cols-7 p-4 text-sm items-center border-t">
                <div>{user.id}</div>
                <div>{`${user.name.firstname} ${user.name.lastname}`}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.address.city}</div>
                <div>
                  <button className="text-blue-600 hover:underline">View</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main3;
