import { useState } from 'react';
import './App.css';
import GamePage from './components/GamePage';
import Leaderboard from './components/Leaderboard';
import UserPage from './components/UserPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { uuid } from 'uuidv4';

function App() {
  const winningNumber = Math.floor(Math.random() * 101);
  const [winnerList,setWinnerList] = useState([]);
  const [userList,setUserList] = useState([]);

  const AddUser = (username) =>{
    const newUser = {Id: uuid().slice(0,8), username : username};
    setUserList([newUser , ...userList]);
  }

  return (
    <div className='App'>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<> <UserPage userList = {userList} AddUser={AddUser}/> </>}/>

        <Route exact path="/gamepage" element={<> <GamePage winningNumber = {winningNumber}/> </>}/>

        <Route exact path="/leaderboard" element={<> <Leaderboard winnerList = {winnerList}/> </>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
