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
  Modal
} from "react-bootstrap";

export default function NewUser(props) {
  const [username,setUsername] = useState('');
  const [show,setShow] = useState(false);
  const [showUser,setShowUser] = useState(false);
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
  const handleCloseUser = () =>{
    setShowUser(false);
  }
  const handleNewUser = () =>{
    props.AddUser(username);
    setShowUser(true);
  }
  return (
    <Container>
      <Alert variant="success">Welcome to *Guess The Number*</Alert>
      <Form onSubmit={handleNewUser}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name here" value = {username} onChange={(e)=> handleName(e)}/>
        </Form.Group>
        <Button variant="success" type="submit">
          Lets' Get Started!
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Incorrect Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kindly input your beautiful name to continue!</Modal.Body>
      </Modal>
      <Modal show={showUser} onHide={handleCloseUser}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome {username}</Modal.Title>
        </Modal.Header>
      </Modal>
    </Container>
  );
}
