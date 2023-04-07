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
        navigate("/login/dashboard")
    }else{
        alert("somesthing went wrong")
    }
  }
}


  return (
   <>
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
   </>
  )
}

export default Login