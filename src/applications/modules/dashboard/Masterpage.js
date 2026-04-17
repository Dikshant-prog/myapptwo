import React from 'react'
import Appheader from '../../sharecomponents/Appheader'
import Appfooter from '../../sharecomponents/Appfooter'
import Appsidebar from '../../sharecomponents/Appsidebar'
// import LandingPage from './LandingPage'
import { Outlet } from 'react-router-dom'



const Masterpage = () => {

    const username = "ravi singh";
    const user = {name:"pankaj",role:"admin"}
    const message = ()=>{
        alert("welcome to func");
    }
 return (

<>
    <Appheader xyz={username} menu={user} myfunc={message}/>
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-3'>
            <Appsidebar/>
        </div>
        <div className='col-md-9 cus-h border'>
            <Outlet></Outlet>

        </div>
    </div>
   </div>
   <Appfooter/>
   </>
  )
}

export default Masterpage

