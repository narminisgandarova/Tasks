import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const user ={
  email:"nrmin@isg",
  pass:"123"
}
const User = () => {

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

const formSubmit=(e)=>{
   e.preventDefault();
   if(!emailRef.current.value || !passRef.current.value){
     alert("please, fill input")
   }
   else{
    if(emailRef.current.value === user.email && passRef.current.value=== user.pass){
          alert("login succecfully");
          navigate('/cart')
    }else{
      alert('email or pass is wrong')
    }
   }
}

  return (
    <>
  <div className="d-flex align-items-center justify-content-center flex-column login">
            <div className="col-4">
                <Form onSubmit={formSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                   
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Control ref={passRef} type="password" placeholder="Password" />
                    </Form.Group>
                
                    <Button variant="outline-light" type='submit'>Light</Button>
                </Form>
            </div>
        </div>
    </>
  )
}

export default User 