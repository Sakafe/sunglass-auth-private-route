import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <Navbar/>
      <Outlet />
      <Footer />
      <Toaster/>
    </div>
  )
}


export default Root