
//These will become PHP session variables 
var MAX_MOVES = 20;
var BLOCK_SIZE = 40; //size of one block on the screen
var id = null;
var level = 0;
var level_start_positions = [0];
var level_goal_positions = [8];

//Send the robot back it's starting position in the array
function robotRestart() {

	//Clear the robot from its current position
	var robot = document.querySelector("#robot");
	robot.parentNode.innerHTML = '';

	//Place the robot back at the start position
	var game_grid = document.querySelector("#game-grid");
	var position_array = game_grid.childNodes;
	var robot_start_pos = level_start_positions[level];
	var goal_pos = level_goal_positions[level];
	position_array[goal_pos*2+1].innerHTML = "<div id='goal'></div>";
	position_array[robot_start_pos*2+1].innerHTML = "<div id='robot'></div>";

	//hide the play again button and enable the go button
	document.querySelector("#game-status").innerHTML = '';
	document.querySelector("#robot-try-again").style.visibility = "hidden";
	document.querySelector("#robot-submit").disabled = false;
}
	

function robotGo() {
	var on_front_wall = document.querySelector("#on-front-wall").value;
	var on_bottom_wall = document.querySelector("#on-bottom-wall").value;
	var robot_default = document.querySelector("#default").value;

	var robot = document.querySelector("#robot");
	var game_status = document.querySelector("#game-status");
	var go_button = document.querySelector("#robot-submit");

	go_button.disabled = true;

	game_status.innerHTML = ''; //clear any error messages	

	var game_grid = document.querySelector("#game-grid");
	var position_array = game_grid.childNodes;
	var num_positions = game_grid.childElementCount;
	var num_rows = Math.sqrt(num_positions);
	var num_columns = num_rows;

	
	var hpos = 0; //horizontal offset
	var vpos = 0; //vertical offset
	var goal_pos = level_goal_positions[level];
	var moves = 0;
	var robot_array_pos = level_start_positions[level]*2+1; //position of robot in position array
	var robot_start_pos = robot_array_pos; 
	var error = 0;
	clearInterval(id); //stop any previous animation
	id = setInterval(moveRobot, 1000); //call the function moveRobot every second

        function moveRobot() {
		moves++;
		error = false;
		
		if (moves >= MAX_MOVES) { //ran out of moves
			status.innerHTML("The robot took too many moves and ran out of steam. Try again.");
			position_array[robot_array_pos].innerHTML = '';
			position_array[robot_start_pos].innerHTML = "<div id='robot'></div>";
			clearInterval(id);
			return;
		}
		else {
		
			if (vpos + 1 >= num_rows) { //Wall below
				switch(on_bottom_wall) {
					case "Left":
						if (hpos == 0) { //going off grid
							 error = true;
							 break;
					        }
					        hpos--;
						break;
				        case "Right":
					        if (hpos >= num_columns) {
						        error = true;
						        break;
					        }
					        hpos++;
						break;
			               default:
				 	      error = true;
                               }
                       }
                       else if (hpos + 1 >= num_columns) { //wall in front
                                switch(on_front_wall) {
                                        case "Down":
                                               if (vpos + 1 >= num_rows) {
                                                        error = true;
                                                        break;
	                                       }
	                                       vpos++;
	                                       break;
	   		 		case "Up":
					        if (vpos == 0) {
						        error = true; 																		                                                           break;	  															                                          			      }
                                                vpos--;
	                                        break;
	                               default:
		                               error = true;
		              }
	            }
		    else { //no wall
			   switch (robot_default) {
				   case "Down":
					   vpos++;
				           break;
				   case "Right":
					   hpos++;
					   break;
				   default:
					   error = true;
			  }
	            }
		    if (error) {
			    game_status.innerHTML = "Oops that path wasn't quite right. Try again.";
			    position_array[robot_array_pos].innerHTML = '';
			    position_array[robot_start_pos].innerHTML = "<div id='robot'></div>";
			    go_button.disabled = false;
			    clearInterval(id);
			    return;
		    }
		    position_array[robot_array_pos].innerHTML = '';
		    robot_array_pos = (vpos * num_rows + hpos) * 2 + 1;
		    position_array[robot_array_pos].innerHTML = "<div id='robot'></div>";

		    if ((hpos*num_columns + vpos) == goal_pos) {
			clearInterval(id); //stop animation
			game_status.innerHTML = "Yay, Rob successfully reached the goal!";
			document.querySelector("#robot-try-again").style.visibility = "visible";
			document.querySelector("#next-level").style.visibility = "visible";
			return;
		   }	

	   }
	   return;
	}
}



