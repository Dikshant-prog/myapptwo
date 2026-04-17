import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const UserLogin = () => {

  const a = useNavigate();

  const[email, updateemail] = useState("abc@gmail.com");
  const[pass, updatepass] = useState("1234");

  const myemailupdate = (e)=>{
        updateemail(e.target.value)
  }

  const mypassword = (p)=>{
         updatepass(p.target.value)
  }


  const mylogin = () =>{
    if(email==="")
    {
      toast.info("Email is required",{autoClose:2000,theme:'dark'});
    }
    else if(pass==="")
    {
      toast.info("Password is required",{autoClose:2000,theme:'dark'})
    }
    else
    {
      if(email==="admin@gmail.com" && pass==="admin")
      {
       toast.success("Welcome",{autoClose:2000,theme:'dark'})
       setTimeout(()=>{
           a("/dashboard")
       },2000)
        
      }
      else{
        toast.error("Not Valid",{autoClose:2000,theme:'dark'})
      }
    }
  }
  
  return (
   
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 border shadow">
          <h1 className="pt-3 mb-5 text-center">Login Page</h1>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div class="mb-3">
                <label class="form-label"> <MdOutlineMailOutline /> Email address</label>
                <input type="email" class="form-control" value={email} onInput={myemailupdate}/>
              </div>
              </div>
<ToastContainer/>
              <div className="col-md-12">
                <div class="mb-3">
                <label class="form-label"> <RiLockPasswordLine />Password</label>
                <input type="password" class="form-control" value={pass} onInput={mypassword} />
              </div>
              </div>

              <div className="col-md-12 text-center">
                <div class="mb-3">
                <input type="button" className="btn btn-success" value="Login" onClick={mylogin} />
                <Link to="register">New User</Link>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default UserLogin;
