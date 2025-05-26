import React, { useEffect, useState } from 'react'

const Main2 = () => {
  const [carts, setCarts] = useState([])

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/carts')
        const data = await response.json()
        setCarts(data)
      } catch (error) {
        console.error('Error fetching carts:', error)
      }
    }

    fetchCarts()
  }, [])

  return (
    <>
      <div className="w-[82vw] mt-15 ml-[17vw]">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Carts</h1>
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
              <div>Cart ID</div>
              <div>User ID</div>
              <div>Product Count</div>
              <div>Status</div>
              <div>Expert</div>
              <div>Date</div>
              <div>Actions</div>
            </div>

            {carts.map(cart => (
              <div key={cart.id} className="grid grid-cols-7 p-4 text-sm items-center border-t">
                <div>{cart.id}</div>
                <div>{cart.userId}</div>
                <div>{cart.products.length}</div>
                <div>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                    In Progress
                  </span>
                </div>
                <div>Unassigned</div>
                <div>{new Date(cart.date).toLocaleDateString()}</div>
                <div>
                  <button className="flex items-center space-x-1 text-blue-600 hover:underline">
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Main2
