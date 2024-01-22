import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Winner(props) {
  const navigate = useNavigate()
  const handleLeaderboard = () =>{
    let winner = {user : props.user, attempt : props.attempt}
    return navigate("/leaderboard" , { state: { winner : winner}});
  }
  return (
    <Modal show={props.winner} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you took {props.attempt} attempts to guess {props.winningNumber}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLeaderboard}>
            Go to Leaderboard
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
