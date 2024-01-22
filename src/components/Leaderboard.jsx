import React from 'react'

export default function Leaderboard(props) {
  return (
    <>
     {props.winnerList.length === 0 ? 'Play a game to generate Leaderboard' :
     props.winnerList.map((element) => {
      return element.Name
     })
     } 
    </>
  )
}
