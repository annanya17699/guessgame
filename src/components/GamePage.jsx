import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Alert,
  Modal,
  Row,
  Col,
  Image
} from "react-bootstrap";
import sadduck from '../assets/sadduck.gif'
import helloduck from '../assets/helloduck.gif'
import happyduck from '../assets/happyduck.gif'
import Winner from "./Winner";
import { useLocation } from 'react-router-dom';

export default function GamePage(props) {
    const location = useLocation();
    const user = location.state.user
    const [winner,setWinner] = useState(false);
    const [show,setShow] = useState(false);
    const [attempt,setAttempt] = useState(0);
    const [guess , setGuess] = useState('');
    const [guessList , setGuessList] = useState([]);
    const winningNumber = props.winningNumber;
    const handleClose = () =>{
      setShow(false);
    }
    const handleGuess = (e)=>{
        setGuess(e.target.value)
    }
    const handleResult = (e)=>{
      e.preventDefault();
      if(guess < 0 || guess >100 ){
        setShow(true);
      }
      else if(Number.parseInt(winningNumber) !== Number.parseInt(guess)){
        let diff = winningNumber > guess ? 'smaller' : 'larger';
        setGuessList([{guess : guess , diff : diff},...guessList]);
        setAttempt(attempt+1);
      }else{
        setAttempt(attempt+1);
        setWinner(true)
      }
      setGuess('')
    }
  return (
    <Container>
        {winner ? <Winner winnerList = {props.winnerList} user={user} attempt={attempt} winningNumber = {winningNumber} winner={winner}/> : ''}
        <Row>
          <Col>
        <Alert variant="primary">Instructions : Enter Number between 1 and 100</Alert>
      <Form onSubmit={(e)=>handleResult(e)}>
        <Form.Group className="mb-3" controlId="guess">
          <Form.Label>Enter Your Guess</Form.Label>
          <Form.Control type="number" placeholder="Enter Your Guess" value={guess} onChange={(e)=>handleGuess(e)}/>
        </Form.Group>
        <Button variant="outline-success" type="submit">
        Submit your Guess
      </Button>
      </Form>
      {winner ? <Image src={happyduck} width='200px'/> : guessList.length === 0 ? <Image src={helloduck} width='200px'/> : <Image src={sadduck} width='200px'/>}
      </Col>
      <Col>
        <Alert variant="danger">Attempts by {user.username} : {attempt}</Alert>
        {guessList.length === 0 ? <Alert variant="warning">Lets Make the 1st Guess</Alert>
        :
        guessList.map((element)=>{
          return <Alert variant="warning">{element.guess} is {element.diff} than the number, try again!</Alert>
        })}
         </Col>
        </Row>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Incorrect Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kindly input number between 1 and 100</Modal.Body>
      </Modal>
    </Container>
  );
}
