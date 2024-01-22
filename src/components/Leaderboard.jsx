import React, { useEffect } from 'react'
import { Alert, Button, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function Leaderboard(props) {
  const location = useLocation();
  const winner = location.state.winner
  useEffect(()=>{
    props.AddUpdateWinner(winner);
  },[])
  return (
    <>
    <Button variant='success'><Link to='/' style={{color : 'white', textDecoration: 'none'}}>Go to Homepage</Link></Button>
     {props.winnerList.length === 0 ? 'Play a game to generate Leaderboard' :
     <Table striped bordered hover responsive>
     <thead>
     <tr>
      <th>Id</th>
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
          <th>{element.user.Id}</th>
          <th>{index+1}</th>
          <th>{element.user.username}</th>
          <th>{element.attempt}</th>
        </tr>
      )
     })
     } 
     </tbody>
     </Table>}
    </>
  )
}
