import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import GamePage from "./components/GamePage";
import Leaderboard from "./components/Leaderboard";
import UserPage from "./components/UserPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let localWinnerList = [];
  if (localStorage.getItem("winnerList") === null) {
    localWinnerList = [];
  } else {
    localWinnerList = JSON.parse(localStorage.getItem("winnerList"));
  }
  const winningNumber = Math.floor(Math.random() * 100) + 1;
  const [winnerList, setWinnerList] = useState(localWinnerList);

  let localList = [];
  if (localStorage.getItem("userList") === null) {
    localList = [];
  } else { 
    localList = JSON.parse(localStorage.getItem("userList"));
  }
  const [userList, setUserList] = useState(localList);

  const AddUser = (username) => {
    const newUser = { Id: uuid().slice(0, 6), username: username };
    setUserList([newUser, ...userList]);
  };

  const AddUpdateWinner = (winner) => {
    if (winner !== null) {
      let indexToUpdate = winnerList.findIndex((obj) => {
        return obj.user.Id === winner.user.Id;
      });
      if (indexToUpdate !== -1) {
        let updatedList = winnerList.map((obj, index) => {
          if (index === indexToUpdate) {
            obj.attempt = winner.attempt;
            return obj;
          } else return obj;
        });
        setWinnerList(updatedList);
      } else {
        setWinnerList([winner, ...winnerList]);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
    localStorage.setItem("winnerList", JSON.stringify(winnerList));
  }, [userList, winnerList]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/gamepage"
            element={<GamePage winningNumber={winningNumber} />}
          />
          <Route
            exact
            path="/leaderboard"
            element={
              <Leaderboard
                winnerList={winnerList}
                AddUpdateWinner={AddUpdateWinner}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <UserPage
                userList={userList}
                AddUser={AddUser}
                winnerList={winnerList}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
