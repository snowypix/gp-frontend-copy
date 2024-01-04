import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteConfirmation = (props) => {
  return (
    <div>


      <Modal show={props.showModel} onHide={() => { props.closeDeleteConfirmation() }} >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => { props.deleteConfirmHandler() }}>
            Confirm Delete
          </Button>
          <Button variant="secondary" onClick={() => { props.closeDeleteConfirmation() }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DeleteConfirmation
