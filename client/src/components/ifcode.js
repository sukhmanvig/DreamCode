import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/ifcode-style.css";
import "../css/nav.css";
import ChangeFontSize from "./ChangeFontSize";

const IfCodeSnippets = () => {
  useEffect(() => {
    ChangeFontSize();
  }, []);

  return (
    <Fragment>
      <title>Learn If Statements</title>
      <body id="ifcode_body">
        <div id="content">
          <h1 className="ifcode_h1">If Statements</h1>
          <div className="notes">
            <div id="fontsizer">
              <ul>
                <li>A</li>
                <li>A</li>
                <li>A</li>
              </ul>
            </div>
          </div>
          <p>An if statement tests a condition.</p>
          <pre className="ifcode_pre">
            <code>{`if(is_front_wall): # If there is a wall in front`}</code>
          </pre>
          <p>
            If the condition is TRUE, then the code within the if statement is
            run.
          </p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # if there is a wall in front 
	# Go down
	vertical_position = vertical_position - 1 `}
            </code>
          </pre>
          <p>
            If the condition is FALSE, then the code within the if statement is
            not run (it is skipped).
          </p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # if there is a wall in front
	# Go down
	vertical_position = vertical_position - 1 `}
            </code>
          </pre>
          <p>
            If the condition is FALSE and an ELSE statement is present, the code
            within the ELSE statement is run instead.
          </p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # If there is a wall in front
	# Go down
	vertical_position = vertical_position - 1
else: # If there is no wall in front 
    	# Go right
	horizontal_position = horizontal_position + 1`}
            </code>
          </pre>
          <p>
            Multiple conditions can be chained together using the ELIF
            statement.
          </p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # If there is a wall in front
	# Go down
	vertical_position = vertical_position - 1
elif(is_bottom_wall): # If there is a wall below
    	# Go up
	vertical_position = vertical_position + 1 `}
            </code>
          </pre>
          <p>
            In a chain of conditions with ELIF statements, Python tests each
            condition in order and runs the code within the first statement
            whose condition is TRUE. All following ELIF statements are not run.
          </p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # If there is a wall in front
	# Go down
	vertical_position = vertical_position - 1
elif(is_bottom_wall): # If there is a wall below
    	# Go up
	vertical_position = vertical_position + 1`}
            </code>
          </pre>
          <p>
            An ELSE statement can be added to a chain of conditions. The code
            within an ELSE statement is run if all IF and ELIF conditions are
            FALSE.
          </p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # If there is a wall in front
	# Go down
	vertical_position = vertical_position - 1
elif(is_bottom_wall): # If there is a wall below
    	# Go up
	vertical_position = vertical_position + 1
else: # If none of the above are true
    	# Go right
	horizontal_position = horizontal_position + 1`}
            </code>
          </pre>
          <p>An example combining IF, ELIF, and ELSE statements</p>
          <pre className="ifcode_pre">
            <code>
              {`if(is_front_wall): # If there is a wall in front
	# Go down
	vertical_position = vertical_position - 1
elif(is_bottom_wall): # If there is a wall below
        # Go up
	vertical_position = vertical_position + 1
else: # If none of the above are true
   	# Go right
	horizontal_position = horizontal_position + 1`}
            </code>
          </pre>
          <Link to="/ifgame">
            <input
              type="submit"
              id="toGameButton"
              name="game"
              value="If Statement Game"
            />
          </Link>
        </div>
      </body>
    </Fragment>
  );
};

export default IfCodeSnippets;
