import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Moviedata from '../../Moviedata/movies'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Movedescription.css'
const MovieDescription = () => {
  const params = useParams()
  const [movie,setMovie] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    setMovie(Moviedata.find((movie) => movie.id === Number(params.id))); // Convert params.id to a number
  }
  , [params.id])

  return (
    <div className="movie-description-container">
    <Container>
      <Row>
        <Col md={6}>
          <h1>Description of the movie: {movie.title}</h1>
          <p>{movie.description}</p>
        </Col>
        <Col md={6}>
          <iframe
            src={movie.trailer}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
    <Button variant="primary" className="back-button" onClick={() => navigate(-1)}>
      Back
    </Button>
  </div>
  )
}

export default MovieDescription