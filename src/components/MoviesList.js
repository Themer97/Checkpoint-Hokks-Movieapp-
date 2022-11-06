import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies,searchTitle,searchRate}) => {
      const myStyle={
        display:"flex",
        justifyContent:"space-evenly",
        flexWrap:"wrap",
        gap:"30px",
        width:"90%",
        margin:"50px auto"
      };
  return (
    <div style={myStyle}>
      {
        movies.filter(movie=>movie.title.toUpperCase().includes(searchTitle.toUpperCase().trim())).map((movie=><MovieCard key={movie.id} movie={movie} />))
      }
      </div>
  )
}

export default MoviesList