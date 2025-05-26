import Aside from "../components/Aside"
import Main4 from "../components/Main4"
import Navbar from "../components/Navbar"

const Auth = () => {
  return (
    <>
       <div className='flex flex-row'>
     <Aside/>
     <div className='flex flex-col '>
    <Navbar/>
     <Main4/>
     </div>
     </div>
    </>
  )
}

export default Auth
