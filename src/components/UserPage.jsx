import React from 'react'
import NewUser from './NewUser'
import UserName from './UserName'

export default function UserPage(props) {
  return (
    <div>
      <NewUser AddUser={props.AddUser}/>
      <UserName/>
    </div>
  )
}
