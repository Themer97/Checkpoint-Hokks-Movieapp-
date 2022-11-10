import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';

const AddMovie = ({addMovie}) => {
  const [show, setShow] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterUrl, setposterUrl] = useState("");
  const [rate, setrate] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleadd=()=>{
addMovie({title,description,posterUrl,rate,id:Math.random()});
handleClose()


  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormControl type="text" placeholder='title' onChange={(e)=>settitle(e.target.value)}/> <br />
            <FormControl type="text" placeholder='description' onChange={(e)=>setdescription(e.target.value)}/>{" "} <br />
            <FormControl type="text" placeholder='posterUrl' onChange={(e)=>setposterUrl(e.target.value)}/>{" "} <br />
            <FormControl type="Number" placeholder='rate' onChange={(e)=>setrate(+e.target.value)}/> <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie