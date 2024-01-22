import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Winner(props) {
  return (
    <Modal show={props.winner}>
        <Modal.Header>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you took {props.attempt} attempts to guess {props.winningNumber}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Go to Leaderboard
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
