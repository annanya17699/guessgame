import React, { useEffect } from 'react'
import { Container, Table, Image, Alert } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import rankduck from '../assets/rankduck.gif'
export default function Leaderboard(props) {
  const location = useLocation();
  let winner = null;
  console.log(location.state)
  if(location.state !== null){
    winner = location.state.winner
  }
  useEffect(()=>{
    if(winner !== null) props.AddUpdateWinner(winner);
  },[props,winner])
  return (
    <Container className='p-3 text-center'>
        <Alert variant='info'>LEADERBOARD <Image src = {rankduck} width="100px"/></Alert>
      {props.winnerList.length === 0 ? 'Play a game to generate Leaderboard' :
     <Table striped bordered hover responsive>
     <thead>
     <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Attempts</th>
        </tr>
        </thead>
        <tbody>
     {props.winnerList.sort((a,b)=>{
      return a.attempt - b.attempt
     }).map((element, index) => {
      return (
        <tr>
          <th>{index+1}</th>
          <th>{element.user.username}</th>
          <th>{element.attempt}</th>
        </tr>
      )
     })
     } 
     </tbody>
     </Table>}
    </Container>
  )
}
