import React, { useEffect, useState } from 'react'

const LandingPage = () => {
   const abc = JSON.parse(localStorage.getItem("mydata"));

   const [localdata,updatadata] = useState({});

   const mylocaldata = () =>{
    updatadata(JSON.parse(localStorage.getItem("mydata")));
   }

   useEffect(()=>{
    mylocaldata();
   },[])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div class="card shadow bg-info text-white">
              <div class="card-body">
                <h5 class="card-title">Local Storage</h5>
                <p>{abc.email}</p>
              </div>
          </div>
        </div>
       
        <div className='col'>
          <div class="card shadow bg-dark text-white">
              <div class="card-body">
                <h5 class="card-title">Local Storage data email</h5>
                <h2>{localdata.email}</h2>
              </div>
          </div>
        </div>
        <div className='col'>
          <div class="card shadow bg-warning text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>
        <div className='col'>
          <div class="card shadow bg-danger text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>

        <div className='col-md-8 mt-3'>
          <div class="card shadow bg-danger text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div class="card shadow bg-danger text-white">
              <div class="card-body">
                <h5 class="card-title">Total Employee</h5>
                <h1>57800</h1>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
