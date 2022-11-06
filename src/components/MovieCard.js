import React from 'react'
import { Button, Card } from 'react-bootstrap'

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
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
}

export default MovieCard