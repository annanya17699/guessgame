import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import GamePage from './components/GamePage';
import Leaderboard from './components/Leaderboard';
import UserPage from './components/UserPage';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let localWinnerList = [];
  if(localStorage.getItem("winnerList") === null){
    localWinnerList = [];
  }else{
    localWinnerList = JSON.parse(localStorage.getItem("winnerList"));
  }
  const winningNumber = Math.floor(Math.random() * 101);
  const [winnerList,setWinnerList] = useState(localWinnerList);

  let localList = [];
  if(localStorage.getItem("userList") === null){
    localList = [];
  }else{
    localList = JSON.parse(localStorage.getItem("userList"));
  }
  const [userList,setUserList] = useState(localList);

  const AddUser = (username) =>{
    const newUser = {Id: uuid().slice(0,6), username : username};
    setUserList([newUser , ...userList]);
  }

  const AddUpdateWinner = (winner) =>{
    console.log(winner)
    setWinnerList([winner , ...winnerList]);
  }

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
    localStorage.setItem("winnerList", JSON.stringify(winnerList));
  }, [userList,winnerList]);

  return (
    <div className='App'>
<HashRouter>
  <Header/>
      <Routes>
        <Route exact path="/" element={<> <UserPage userList = {userList} AddUser={AddUser} winnerList = {winnerList}/> </>}/>

        <Route exact path="/gamepage" element={<> <GamePage winningNumber = {winningNumber}/> </>}/>

        <Route exact path="/leaderboard" element={<> <Leaderboard winnerList = {winnerList} AddUpdateWinner={AddUpdateWinner}/> </>}/>

      </Routes>
      <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
