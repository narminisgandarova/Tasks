import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const user={
    name:"narmin",
    pass:"123",
}

const Login = () => {
const userref = useRef();
const passref = useRef();
const navigate = useNavigate();

const formSubmitOne = (e)=>{
  e.preventDefault();
  if(!userref.current.value  || !passref.current.value){
      alert("pls fill input")
  }else{
    if (userref.current.value === user.name && passref.current.value === user.pass)  {
        alert("login successfully")
        navigate("/dashboard")
    }else{
        alert("somesthing went wrong")
    }
  }
}


  return (
   <>

  <div className="row mt-5">
  <div className="col-12 col-sm-6 col-md-6">
    <img src="https://www.freepnglogos.com/uploads/welcome/very-best-welcome-back-pictures-and-photos-32.png" className='mt-5' alt="" />
   </div>
   <div className="col-12 col-sm-6 col-md-6">
    <div className="text-center fs-1 my-5 text-dark">Login</div>
    <div className="d-flex justify-content-center align-items-center mt-5">
    <div className="col-6">
     <form onSubmit={formSubmitOne}>
    <div className="mb-3">
        <input type="text" ref={userref} className="form-control"    placeholder='user name'/>
    </div>
    <div className="mb-3">
        <input type="password" ref={passref} className="form-control"  placeholder='password' />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
    </div>
   </div>
   
  </div>
   </>
  )
}

export default Login