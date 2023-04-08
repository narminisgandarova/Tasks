import React from 'react'
import SingleCard from '../components/SingleCard'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'

const Blog = ({svalue}) => {
  return (
   <>
  
    <h1 className='text-center my-5'>Blog List</h1>
    <Row>
    {svalue.map((item ,i) => (
          <SingleCard  title={item.title} 
                      desc={item.desc} 
                      key={i} 
                      photo={item.photo} 
                      id={item.id} />
        ))}
    </Row>
   </>
  
  )
}

const mapStateToProps=(state)=>{
  return {
    svalue:state
  }
}


export default connect (mapStateToProps)( Blog)