import Aside from "../components/Aside"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

const Products = () => {
  return (
    <>
       <div className='flex flex-row '>
     <Aside/>
     <div className='flex flex-col '>
    <Navbar/>
     <Main/>
     </div>
     </div>
    </>
  )
}

export default Products
