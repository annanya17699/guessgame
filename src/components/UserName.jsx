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

export default function UserName() {
  return (
    <Container className="userpage">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>User 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the User 1 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Select User</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>User 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the User 1 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Select User</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>User 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the User 1 and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Select User</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
