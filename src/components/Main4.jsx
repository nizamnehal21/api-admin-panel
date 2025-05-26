import React from 'react'

const Main4 = () => {
  return (
    <>
     <div className="w-[82vw] mt-15 ml-[17vw]">
         {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Auth</h1>
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

        {/* Subheader */}
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
            {/* <Search className="w-4 h-4 mr-2 text-gray-500" /> */}
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
            <div>App ID</div>
            <div>User</div>
            <div>Type</div>
            <div>Status</div>
            <div>Expert</div>
            <div>Applied</div>
            <div>Actions</div>
          </div>
          <div className="grid grid-cols-7 p-4 text-sm items-center">
            <div className=''>6830514da1ac1097f3</div>
            <div>Aniket</div>
            <div>Fresh</div>
            <div>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Completed</span>
            </div>
            <div>Assigned</div>
            <div>3 days ago</div>
            <div>
              <button className="flex items-center space-x-1 text-blue-600 hover:underline">
                {/* <Eye className="w-4 h-4" /> */}
                <span>View</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  )
}

export default Main4
