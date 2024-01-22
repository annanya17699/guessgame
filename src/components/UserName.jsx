import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function UserName(props) {
  let navigate = useNavigate(); 
  function handlePlayGame(user){
    return navigate("/gamepage" , { state: { user:  user, winnerList : props.winnerList}});
  }
  return (
    <Container className="userpage">
      <Row>
        {props.userList.length === 0
          ? ""
          : props.userList.map((user) => {
              return (
                <Col key={user.Id} xl={2}>
                  <Card className="my-2">
                    <Card.Body>
                      <Card.Title>{user.username}</Card.Title>
                      <Button variant="success" onClick={()=>handlePlayGame(user)} >Start Game</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
      </Row>
    </Container>
  );
}
