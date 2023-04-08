import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {  removeBlogFromDatabase } from '../actions/blogAction'

const Dashboard = () => {
    const pvalue = useSelector(state=>state)
    const dispatch = useDispatch()
  return (
  <>
  <div className="text-center my-5 fs-1 text-dark">
    Admin Panel
  </div>
 <LinkContainer to="/dashboard/add">
 <Button type="button" variant="btn btn-success mb-3">Add</Button>
 </LinkContainer>
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Edit</th>
      <th scope="col">delete</th>
    </tr>
      {/* <th scope="col">Father's name</th>
      <th scope="col">Mather's name</th>
      <th scope="col">gender</th>
      <th scope="col">Nathionality</th>
      <th scope="col">date of birth</th>
      <th scope="col">card no</th>
      <th scope="col">personal no</th>
      <th scope="col">blood group</th> */}
      
  </thead>
  <tbody>
   {pvalue.map((item,i)=>{
    return (
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td><img src={item.photo} width={100} alt="" /></td>
        <td>{item.name}</td>
        <td>{item.surname}</td>
        <td>
            <LinkContainer to={`/dashboard/edit/${item.id}`}>
            <Button variant='warning'>Edit</Button>
            </LinkContainer>
        </td>
        <td>
            <LinkContainer to='/dashboard'>
            <Button variant='danger' onClick={()=>{dispatch(removeBlogFromDatabase(item.id))}}>Delete</Button>
            </LinkContainer>
        </td>
      </tr>
    )
   })}
  </tbody>
</table>
  </>
  )
}

export default Dashboard