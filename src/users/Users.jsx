import Aside from "../components/Aside"
import Main3 from "../components/Main3"
import Navbar from "../components/Navbar"

const Users = () => {
  return (
    <>
       <div className='flex flex-row'>
     <Aside/>
     <div className='flex flex-col '>
    <Navbar/>
     <Main3/>
     </div>
     </div>
    </>
  )
}

export default Users
