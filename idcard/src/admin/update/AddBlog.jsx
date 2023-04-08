import React from 'react'
import BlogForm from '../BlogForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addBlogToDatabase } from '../../actions/blogAction';

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <>
     <div className="text-center fs-1 my-5 text-dark">Add New Id Card</div>
     <BlogForm onFormSubmit={items=>{
            dispatch(addBlogToDatabase(items));
            navigate('/dashboard');
        }}/>
    </>
  )
}

export default AddBlog