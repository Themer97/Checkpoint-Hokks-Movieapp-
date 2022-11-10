import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';

const Navigation = ({setSearchTitle,setSearchRate}) => {
  const ratingChanged = (newRating) => {
    setSearchRate(newRating);
  };
   
  return <Navbar bg="secondary" variant="dark" sticky="top">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      
    </Nav>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearchTitle(e.target.value)}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
  </Container>
</Navbar>
}

export default Navigation