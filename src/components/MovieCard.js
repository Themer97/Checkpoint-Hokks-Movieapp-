import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} style={{height:'250px',objectFit:"cover"}}/>
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Card.Text>
      {"⭐".repeat(movie.rate)}
    </Card.Text>
    <Link to={`/Details/${movie.id}`}><Button variant="primary">More details</Button></Link>
  </Card.Body>
</Card>
}

export default MovieCard