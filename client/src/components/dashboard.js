import React, { Fragment, useEffect, useState } from "react";
import "../css/nav.css";
import "../css/dashboard-style.css";
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';

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
      <body className="dashboard">
        <div id="gameContent">
          <header> Dashboard </header>
          <div id="tophalf">
              <Link to="/Profile">
                <input type="submit" id="profile" value="PROFILE" />
              </Link>
              <div id="leaderboard">
                LEADERBOARD
                <ol>
                  {leaderboard.map((entry, i) => (
                    <li key={i}>{entry.username + " " + entry.points + "XP"}</li>
                  ))}
                </ol>
              </div>
              <Link to="/shell">
                <input
                  type="submit"
                  className="daily-challenge"
                  value="DAILY CHALLENGE"
                />
              </Link>
          </div>
          <h1>GAMES</h1>
          <div id="bottomhalf">
              <input
                  type="text"
                  name="search-bar"
                  className="search-bar"
                  placeholder="Search Bar"
              />
              <hr />
              <div className="category">
                <i className="arrow left"></i>
                <div id="js-category-name">CATEGORY1</div>
                <i className="arrow right"></i>
                <br></br>
                <div className="category-games">
                    <Link to="/stack_game">
                      <input type="submit" className="game" value="Stacks" />
                    </Link>
                    
                    <Link to="/listsgame">
                      <input
                        type="submit"
                        className="game"
                        value="Lists Game"
                      />
                    </Link>

                    <Link to="/treetravtut">
                      <input
                        type="submit"
                        className="game"
                        value="Tree Traversals"
                      />
                    </Link>

                    <Link to="/dictcode">
                      <input
                        type="submit"
                        className="game"
                        value="Python Dictionaries"
                      />
                    </Link>
                    <Link to="/ifcode">
                      <input type="submit" className="game" value="If Statements" />
                    </Link>
                    <Link to="/queue_game">
                      <input type="submit" className="game" value="Queues" />
                    </Link>
                    <Link to="/sort-code">
                      <input type="submit" className="game" value="Sorting" />
                    </Link>
                    <Link to="/PythonProblemRepository">
                      <input type="submit" className="game" value="Python Problems" />
                    </Link>
              </div>
              </div>
            </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Dashboard;
