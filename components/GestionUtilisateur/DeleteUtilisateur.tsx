import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export type DeleteUtilisateurProps = {
    userId : number,
    userName : string,
    setDeleteUserId:(id:number)=> void
}

const DeleteUtilisateur = ({setDeleteUserId,userId,userName}:DeleteUtilisateurProps) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteUser = () =>{
        setDeleteUserId(userId)
        handleClose()
  }
  return (
    <>
    <Button className="btn-sm app-btn-secondary "  onClick={handleShow}>
      Supprimer
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Supprimer Utilisateur</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're deleting  {userName}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" className='text-white' onClick={deleteUser}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default DeleteUtilisateur