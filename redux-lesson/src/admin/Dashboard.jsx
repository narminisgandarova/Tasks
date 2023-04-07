import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

const Dashboard = () => {
    const pvalue = useSelector(state=>state)
  return (
  <>
  <div className="text-center my-5 fs-1 text-dark">
    Admin Panel
  </div>
 <LinkContainer to="/add">
 <Button type="button" variant="btn btn-success mb-3">Add</Button>
 </LinkContainer>
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
   {pvalue.map((item,i)=>{
    return (
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td><img src={item.photo} width={100} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.desc}</td>
        <td>
            <LinkContainer to={`/login/dashboard/${item.id}`}>
            <Button variant='warning'>Edit</Button>
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