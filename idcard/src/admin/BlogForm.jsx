import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const BlogForm = (props) => {
    const [iphoto, setiPhoto] = useState(props.editblog ? props.editblog.photo : "");
    const [iname, setiName] = useState(props.editblog ? props.editblog.name : "");
    const [isurName, setiSurName] = useState(props.editblog ? props.editblog.surname : "");
    const [ifName, setifName] = useState(props.editblog ? props.editblog.fName : "");
    const [imName, setimName] = useState(props.editblog ? props.editblog.mName : "");
    const [igender, setiGender] = useState(props.editblog ? props.editblog.gender : "");
    const [inationality, setiNationality] = useState(props.editblog ? props.editblog.nationality : "");
    const [ibirthDate, setiBirthDate] = useState(props.editblog ? props.editblog.birthDate : "");
    const [icardNo, setiCardNo] = useState(props.editblog ? props.editblog.cardNo : "");
    const [ipersonalNo, setiPersonalNo] = useState(props.editblog ? props.editblog.personalNo : "");
    const [iblood, setiBlood] = useState(props.editblog ? props.editblog.blood : "");

    const formSubmit=(e)=>{
      e.preventDefault();
      if (!iphoto || !iname || !isurName || !ifName || !imName || !igender || !inationality || !ibirthDate || !icardNo || !ipersonalNo || !iblood ) {
        alert("plase fill input")
      }else{
        props.onFormSubmit({
          photo: iphoto,
          name: iname,
          surname: isurName,
          fName:ifName,
          mName:imName,
          gender:igender,
          nationality:inationality,
          birthDate:ibirthDate,
          cardNo:icardNo,
          personalNo:ipersonalNo,
          blood:iblood
        });
      }
    };
  return (
    <>
   <div className="d-flex justify-content-center align-items-center my-5">
   <div className="col-6">
    <Form onSubmit={formSubmit}>

    <Form.Group className="mb-3" >
        <Form.Control type="url" placeholder="Enter your photo link" value={iphoto} onChange={e=>{setiPhoto(e.target.value)}}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter name" value={iname} onChange={e=>{setiName(e.target.value)}}  />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter surname" value={isurName} onChange={e=>{setiSurName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter father's name" value={ifName} onChange={e=>{setifName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter mother's name" value={imName} onChange={e=>{setimName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter gender" value={igender} onChange={e=>{setiGender(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter nationality" value={inationality} onChange={e=>{setiNationality(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="date" placeholder="Enter date of birth" value={ibirthDate} onChange={e=>{setiBirthDate(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter card no" value={icardNo} onChange={e=>{setiCardNo(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter personal no" value={ipersonalNo} onChange={e=>{setiPersonalNo(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Enter your blood group" value={iblood} onChange={e=>{setiBlood(e.target.value)}}/>
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