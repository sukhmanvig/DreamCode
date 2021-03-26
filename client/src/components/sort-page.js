import React, { Fragment, useEffect } from "react";
import SortGameJS from "./sort.js";
import "../css/game-style.css";
import "../css/game-sort-style.css";

/**
 */
const SortGamepage = () => {
	// Use the effect. The object is SortGameJS.
	useEffect(() => {
		SortGameJS();
	}, []);

	// Return as a React component
	return (
		<Fragment>
			<title>Learn Sorting</title>
			<body id="sortgame_body">
				Entries: <input class="game_input" type="text" id="init-array-entries" placeholder="Entries" width="20pt" defaultValue="12"/>
				<button className="game_button" id="init-array">Randomize array</button>
				<div id="gamestate">Click to start game</div>
				<div id="gamehint">Click to start game</div>
				<gamestage id="gamestage">
					...
				</gamestage>
				<button className="game_button sorthint" id="selectionsort" disabled="true">Selection Sort</button>
				<button className="game_button sorthint" id="insertionsort" disabled="true">Insertion Sort</button>

				<button className="game_button sorthint" id="sortstep" disabled="true">Step</button>
			</body>
		</Fragment>
	);
}

export default SortGamepage;