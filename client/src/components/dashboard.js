import React, { Fragment, useEffect, useState } from "react";
import "../css/nav.css";
import "../css/dashboard-style.css";
import CategoryNav from './CategoryNav';

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
          <form action="/shell">
            <input
              type="submit"
              className="daily-challenge"
              value="DAILY CHALLENGE"
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
              src="images/magn-glass.jpg"
              className="search-button"
              alt="submit"
            />
          </form>
          <div className="dashdropdown">
            SELECT OPTION
            <div className="dropdown-elements">
              <a href="/dashboard">Option 1</a>
              <a href="/dashboard">Option 2</a>
              <a href="/dashboard">Option 3</a>
            </div>
          </div>
          <h2>Sort by</h2>
          <br></br>
          <hr />
          <div className="continue-game">
            <form action="/listsgame">
              <input
                type="submit"
                className="continue"
                value="Lists Game"
              />
            </form>
	    <form action="/PythonProblemRepository">
	     <input type="submit" className="continue" value="Python Problems" />
	    </form>
          </div>
	  <div className="continue-game">
          	<form action="/sort-code">
	        	  <input type="submit" className="continue" value="Sorting" />
          	</form>
	  </div>
          <div className="category">
            <i className="arrow left"></i>
            <div id="js-category-name">CATEGORY1</div>
            <i className="arrow right"></i>

            <form action="/stack_game">
              <input type="submit" className="game" value="Stacks" />
            </form>

            <form action="/treetravtut">
              <input
                type="submit"
                className="game"
                value="Tree Traversals"
              />
            </form>

            <form action="/dictcode">
              <input
                type="submit"
                className="game"
                value="Python Dictionaries"
              />
            </form>
            <form action="/ifcode">
              <input type="submit" className="game" value="If Statements" />
            </form>
            <form action="/queue_game">
              <input type="submit" className="game" value="Queues" />
            </form>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Dashboard;
