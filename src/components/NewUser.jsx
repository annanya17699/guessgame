import React , { useState } from "react";
import {
  Card,
  Container,
  Alert,
  Form,
  Button,
  Modal,
  Row, Col, Image
} from "react-bootstrap";
import inputduck from '../assets/inputduck.gif'

export default function NewUser(props) {
  const [username,setUsername] = useState('');
  const [show,setShow] = useState(false);
  const handleName = (e) => {
    if(e.target.value !== null || e.target.value !== ''){
      setUsername(e.target.value);
    }else{
      setShow(true);
    }
  }
  const handleClose = () =>{
    setShow(false);
  }
  const handleNewUser = (e) =>{
    e.preventDefault();
    setUsername('')
    props.AddUser(username);
  }
  return (
    <Container>
      <Card style = {{margin: '1rem 0' , padding : '1rem'}}>
      <Alert variant="success">Welcome to *Guess The Number*</Alert>
      <Row>
      <Col sm={2} xs={12}>
      <Image src ={inputduck} width = "200px" alt="Input Duck"/>
      </Col>
      <Col>
      
      
      <Form onSubmit={(e)=>handleNewUser(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name here" value = {username} onChange={(e)=> handleName(e)}/>
        </Form.Group>
        <Button variant="success" type="submit">
          Lets' Get Started!
        </Button>
      </Form>
      
      </Col>
      
      </Row>
      </Card>
      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Incorrect Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kindly input your beautiful name to continue!</Modal.Body>
      </Modal>
    </Container>
  );
}
