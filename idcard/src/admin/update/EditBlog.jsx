import React from 'react'
import { connect, useDispatch } from 'react-redux'
import BlogForm from '../BlogForm'
import { editBlogFromDatabase } from '../../actions/blogAction';
import { useNavigate } from 'react-router-dom';

const EditBlog = ({svalue}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
    <h2 className='my-5 text-center'>Edit Id Card </h2>
    <BlogForm editblog={svalue} onFormSubmit={items=>{
      dispatch(editBlogFromDatabase(svalue.id,items))
      navigate('/dashboard')
    }}/>
    </>
  )
}

const mapStateToProps=(state)=>{
    const link = window.location.pathname.slice(16,99);
    // console.log(link);
  return({
     svalue:state.find(p=>p.id === link)
  })
}


export default connect (mapStateToProps)(EditBlog)