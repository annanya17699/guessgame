import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Alert,
  Card,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import Winner from "./Winner";

export default function GamePage() {
    const [winner,setWinner] = useState(true)
  return (
    <Container>
        {winner ? <Winner/> : ''}
        <Alert variant="primary">Instructions : Enter Number between 1 and 100</Alert>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Your Guess</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Guess" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        <Alert variant="danger">Attempts by UserName : 0</Alert>
            
              <Alert variant="warning">45 is smaller than the number, try again!</Alert>
              <Alert variant="warning">80 is greater than the number</Alert>
              <Alert variant="warning">67 is greater than the number</Alert>
    </Container>
  );
}
