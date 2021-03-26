import React, { Fragment, useEffect, useState } from "react";
import "../css/nav.css";
import "../css/dashboard-style.css";
import CategoryNav from './CategoryNav';
import magnGlass from "../images/magn-glass.jpg";

const Dashboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const getLeaderboard = async () => {
    try {
      //Change IP to the IP of the machine hosting the API
      const response = await fetch("/leaderboard");
      const jsonData = await response.json();
      setLeaderboard(jsonData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLeaderboard();
    CategoryNav();
  }, []);

  return (
    <Fragment className="dashboard navbar">
      <title> Dashboard </title>
      <body className="dashboard">
        <br></br>

        <div id="content">
          <header> Dashboard </header>

          <form action="/Profile">
            <input type="submit" id="profile" value="PROFILE" />
          </form>
          <div id="leaderboard">
            LEADERBOARD
            <ol>
              {leaderboard.map((entry, i) => (
                <li key={i}>{entry.username + " " + entry.points + "XP"}</li>
              ))}
            </ol>
          </div>
          <form action="stack_game/stack_game.html">
            <input
              type="submit"
              className="daily-challenge"
              value="DAILY CHALLENGE: Stack Game"
            />
          </form>
          <br></br>
          <h1>GAMES</h1>
          <form action="/dashboard">
            <input
              type="text"
              name="search-bar"
              className="search-bar"
              placeholder="Search Bar"
            />
            <input
              type="image"
              name="submit"
              src={magnGlass}
              className="search-button"
              alt="submit"
            />
          </form>
          <div className="dropdown">
            SELECT OPTION
            <div className="dropdown-elements">
              <a href="./">Option 1</a>
              <a href="./">Option 2</a>
              <a href="./">Option 3</a>
            </div>
          </div>
          <h2>Sort by</h2>
          <br></br>
          <hr />
          <div className="continue-game">
            <form action="/ifcode">
              <input
                type="submit"
                className="continue"
                value="CONTINUE PLAYING: Learn If Statements"
              />
            </form>
          </div>
          <div className="category">
            <i className="arrow left"></i>
            <div id="js-category-name">CATEGORY1</div>
            <i className="arrow right"></i>

            <form action="helloworld.html">
              <input type="submit" className="game" value="Hello World Game" />
            </form>

            <form action="python-problem-repository.html">
              <input
                type="submit"
                className="game"
                value="Python Problem Repository"
              />
            </form>

            <form action="/dictcode">
              <input type="submit" className="game" value="Python Dictionaries" />
            </form>

            <form action="/sort-code">
              <input type="submit" className="game" value="Sorting" />
            </form>

            <form action="/hash-code">
              <input type="submit" className="game" value="Hashing" />
            </form>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Dashboard;
