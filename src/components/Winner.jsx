import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Winner() {
  return (
    <Modal show={false}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you took 9 attempts to guess 34!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Go to Leaderboard
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
