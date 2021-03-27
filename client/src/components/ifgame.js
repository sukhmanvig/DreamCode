import React, { Fragment, useEffect } from "react";
import "../css/ifgame-style.css";
import "../css/nav.css";
import IfGameJS from "./ifgamejs.js";

const IfGame = () => {
  useEffect(() => {
    IfGameJS();
  }, []);

  return (
    <Fragment>
      <title>Learn If Statements</title>
      <body id="ifgame_body">
        <div id="content">
          <h1 className="ifgame_h1"> Learn If Statements </h1>
          <div id="game-window">
            <div id="option-select">
              <h2 className="ifgame_h2">Level 1</h2>
              <p>
                Rob the Robot has been tasked with retrieving the treasure on
                the board.
              </p>
              <p>
                Help Rob reach the treasure by telling him what to do when he
                encounters an obstacle.
              </p>
              <div className="option">
                <label htmlFor="on-front-wall">
                  If there is a wall in front, go
                </label>
                <select className="ifgame_select" id="on-front-wall">
                  <option>Up</option>
                  <option>Down</option>
                </select>
              </div>
              <div className="option">
                <label htmlFor="on-bottom-wall">
                  If there is a wall below, go
                </label>
                <select className="ifgame_select" id="on-bottom-wall">
                  <option>Left</option>
                  <option>Right</option>
                </select>
              </div>
              <div className="option">
                <label htmlFor="default"> Otherwise, go</label>
                <select className="ifgame_select" id="default">
                  <option>Down</option>
                  <option>Right</option>
                </select>
              </div>
              <div id="game-status"></div>
              <span>Attempts: <div id="game-attempts">0</div></span>

              <button className="ifgame_button" id="robot-submit">
                Go
              </button>
              <button className="ifgame_button" id="robot-try-again">
                Play Again
              </button>
              <button className="ifgame_button" id="show-hide-code">
                Show/Hide Code
              </button>
              <button className="ifgame_button" id="next-level">
                Next Level
              </button>
            </div>
            <div id="game-grid">
              <div className="grid-position">
                <img id="robot" alt="robot" src="images/robot.png" />
              </div>
              <div className="grid-position"></div>
              <div className="grid-position"></div>
              <div className="grid-position"></div>
              <div className="grid-position"></div>
              <div className="grid-position"></div>
              <div className="grid-position"></div>
              <div className="grid-position"></div>
              <div className="grid-position">
                <img id="goal" alt="goal" src="images/treasure.png" />
              </div>
            </div>
            <div id="ifCode">
              <h2 className="ifgame_h2">Code For Actions</h2>
              <div id="code-output"></div>

              <div id="code-elements">
                <div>
                  The variable <p className="highlighted">is_front_wall</p> is a{" "}
                  <p className="highlighted">boolean</p> that is{" "}
                  <p className="highlighted">TRUE</p> if there is a wall in
                  front of Rob and <p className="highlighted">FALSE</p>{" "}
                  otherwise.
                </div>
                <div>
                  The variable <p className="highlighted">is_bottom_wall</p> is
                  a <p className="highlighted">boolean</p> that is{" "}
                  <p className="highlighted">TRUE</p> if there is a wall below
                  Rob and <p className="highlighted">FALSE</p> otherwise.
                </div>
                <div>
                  The variable <p className="highlighted">hpos</p> is an{" "}
                  <p className="highlighted">integer</p> representing Rob's
                  horizontal position on the board.
                </div>
                <div>
                  The variable <p className="highlighted">vpos</p> is an{" "}
                  <p className="highlighted">integer</p> representing Rob's
                  vertical position on the board.
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default IfGame;
