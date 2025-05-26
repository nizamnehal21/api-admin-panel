import Aside from "../components/Aside"
import Main2 from "../components/Main2"
import Navbar from "../components/Navbar"

const Carts = () => {
  return (
    <>
       <div className='flex flex-row'>
     <Aside/>
     <div className='flex flex-col '>
    <Navbar/>
     <Main2/>
     </div>
     </div>
    </>
  )
}

export default Carts
