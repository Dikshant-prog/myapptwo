import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { FaBookOpen } from "react-icons/fa6";
import axios from 'axios';



function UserRegistor() {

  const mynav = useNavigate();
  const {register, handleSubmit,formState: { errors }} = useForm()

  const mysubmit = (e) =>{
    console.log(e);
    localStorage.setItem("mydata",JSON.stringify(e));
    axios.post("http://localhost:8500/employee",e).then((r)=>{
      console.log(r);
      
    })
    toast.success("successfully registor user",{autoClose:2000,theme:"dark",position:'top-left'});
     setTimeout(()=>{
    mynav("/")
  },2000)
  }
  return (
    <form onSubmit={handleSubmit(mysubmit)}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 border shadow'>
            <h1 className='pt-3 mb-5 text-center'>Registor page</h1>
  <ToastContainer/>
            <div className='container-fluid'>
              <div className='row'>

                
                 <div className='col-md-12'>
                  <div class="mb-3">
                    <label class="form-label"> <FaUser /> Full Name</label>
                    <input type="text" class="form-control"  {...register("fullname",{required:true})}/>
                    {errors.fullname && <p className='text-danger'>Full Name is required</p>}
                  </div>
                </div>

                 <div className='col-md-12'>
                  <div class="mb-3">
                    <label class="form-label"> <FaBookOpen/> Course</label>
                    <select className="form-select" {...register("course")}>
                      <option>Mern</option>
                      <option>React</option>
                      <option>Angular</option>
                      <option>Express</option>
                    </select>
                  </div>
                </div>


                <div className='col-md-12'>
                  <div class="mb-3">
                    <label class="form-label"> <MdOutlineMailOutline/> Email</label>
                    <input type="email" class="form-control" {...register("email",{required:true})} />
                     {errors.email && <p className='text-danger'>Email is required</p>}
                  </div>
                </div>
  
               
               
                <div className='col-md-12'>
                  <div class="mb-3">
                    <label class="form-label"> <FaPhoneAlt /> Phone</label>
                    <input type="text" class="form-control" {...register("phone",{required:true})}/>
                     {errors.phone && <p className='text-danger'>Phone is required</p>}
                  </div>
                </div>

                 <div className='col-md-12'>
                  <div class="mb-3">
                    <label class="form-label"> <RiLockPasswordLine/> Password</label>
                    <input type="password" class="form-control" {...register("password",{required:true,minLength:5,maxLength:10})}/>
                     {errors.password?.type==="required" && <p className='text-danger'>Password is required</p>}
                     {errors.password?.type==="minLength" && <p className='text-danger'>Minimum 5 character is required</p>}
                     {errors.password?.type==="maxLength" && <p className='text-danger'>Maximum 10 character is required</p>}

                  </div>
                </div>

                
               
              
                

                <div className='col-md-12 text-center'>
                   <div class="mb-3">
                   
                    <input type="submit" class="btn btn-success" value="Register Now"/>
                   
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    )
}

export default UserRegistor