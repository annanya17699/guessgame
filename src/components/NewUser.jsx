import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Alert,
  Form,
  Button,
} from "react-bootstrap";

export default function NewUser() {
  return (
    <Container>
      <Alert variant="success">Welcome to *Guess The Number*</Alert>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name here" />
        </Form.Group>
        <Button variant="success" type="submit">
          Lets' Get Started!
        </Button>
      </Form>
    </Container>
  );
}
