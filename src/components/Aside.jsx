import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <>

      <aside className="w-64 h-screen fixed z-10 bg-black text-white shadow-md">
        <div className="p-6  flex justify-center font-bold">AXE VISA</div>
        <nav className=" flex flex-col p-4 space-y-2 ">
      
          <Link to="/" className="hover:bg-gray-100 hover:text-black p-2 rounded" >
            Products
          </Link>
          <Link to="/carts"  className="hover:bg-gray-100 hover:text-black p-2 rounded" >
            Carts
          </Link>
          <Link to="/users" className="hover:bg-gray-100 hover:text-black p-2 rounded" >
            Users
          </Link>
          <Link to="/auth" className="hover:bg-gray-100 hover:text-black p-2 rounded" >
            Auth
          </Link>

        </nav>
        <div className="absolute bottom-4 left-6 text-sm ">
          <div className="font-semibold">Super Admin</div>
          <div className='text-gray-500'>satish0@gmail.com</div>
        </div>
      </aside>
    </>
  )
}

export default Aside
