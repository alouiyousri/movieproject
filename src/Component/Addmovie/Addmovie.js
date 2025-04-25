import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import "./Addmovie.css"

const AddMovie = ({add}) => {
    const [show, setShow] = React.useState(false);
    //initial state
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const [rating, setRating] = React.useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //update state
    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleImage= (e) => setImage(e.target.value);
    const handleRating = (e) => setRating(e.target.value);
    //function to add movie
    const handleAddMovie = () => {
        let newMovie = {
            title,
            description,
            image,
            rating,
        };
        add(newMovie);
        handleClose();
    };

    return (
        <div className="add-movie">
        <Button variant="primary" onClick={handleShow}>
            Add Movie
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="enter title" value={title} onChange={(e) => handleTitle(e)} />
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="enter description" value={description} onChange={(e) => handleDescription(e)} />
            <Form.Label>Poster URL</Form.Label>
            <Form.Control type="text" placeholder="enter poster URL" value={image} onChange={(e) => handleImage(e)} />
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" placeholder="enter rating" value={rating} onChange={(e) => handleRating(e)} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddMovie}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }

export default AddMovie