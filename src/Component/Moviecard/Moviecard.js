import React from 'react';
import './Moviecard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '../Raiting/Rating';

const Moviecard = ({ movie }) => {
  return (
    <div className='card'>
      <Card>
        <Card.Img variant='top' src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>
            <Rating isMovieRating={true} movieRating={movie.rating} />
          </Card.Text>
          <Button variant='primary'>See Trailer</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
