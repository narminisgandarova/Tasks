import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
const SingleCard = ({title,desc,photo,id}) => {
  return (
  <Col sm={6} md={4}>
    <Card >
    <Card.Img variant="top" width={300} src={photo} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {desc}
      </Card.Text>
      <LinkContainer to={`/blog/${id}`}>
      <Button variant="primary">Read More</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default SingleCard