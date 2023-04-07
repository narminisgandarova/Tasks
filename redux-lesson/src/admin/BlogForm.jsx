import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const BlogForm = (props) => {
    const [iphoto, setiPhoto] = useState("");
    const [ititle, setiTitle] = useState("");
    const [idesc, setiDesc] = useState("");

    const formSubmit=(e)=>{
      e.preventDefault();
      if (!iphoto || !idesc || !ititle) {
        alert("plase fill input")
      }else{
        props.onFormSubmit({
          photo: iphoto,
          title: ititle,
          desc: idesc,
        });
      }
    };

  return (
    <>
   <div className="d-flex justify-content-center align-items-center my-5">
   <div className="col-6">
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter photo link" onChange={e=>{setiPhoto(e.target.value)}}  />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter title" onChange={e=>{setiTitle(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter descriptiopn" onChange={e=>{setiDesc(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   </div>
    </>
  )
}

export default BlogForm