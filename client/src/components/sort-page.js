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
				<div id="initmodes" display="block">
					<p>Entries: <input class="game_input" type="text" id="init-array-entries" placeholder="Entries" width="20pt" defaultValue="12" display="inline"/></p>
					<p>Range: <input class="game_input" type="text" id="init-array-rangemax" placeholder="Maximum" width="20pt" defaultValue="12" display="inline"/></p>
				</div>
				<button className="game_button" id="init-array">Generate random array</button>
				<div id="gamestate">Click to start game</div>
				<div id="gamehint">Uninitialized...</div>
				<gamestage id="gamestage" display="block">
					...
				</gamestage>
				<div id="sortmodes" display="block">
					<button className="game_button sorthint" id="swapmode" disabled="true">Swap</button>
					<button className="game_button sorthint" id="selectionsort" disabled="true">Selection</button>
					<button className="game_button sorthint" id="insertionsort" disabled="true">Insertion</button>
					<button className="game_button sorthint" id="quicksort" disabled="true">Quick</button>
					<button className="game_button sorthint" id="radixsort" disabled="true">Radix</button>
					<button className="game_button sorthint" id="sortstep" disabled="true">Step</button>
					<button className="game_button sorthint" id="fastforward" disabled="true">Fast Forward</button>
				</div>
				<div id="gamestats" display="block">
					Swaps made: <span id="statswaps" display="block">...</span><br />
					Hint steps: <span id="stathintsteps" display="block">...</span><br />
					Score earned: <span id="statscore" display="block">...</span><br />
					Win state: <span id="statwinstate" display="block">...</span><br />
				</div>
			</body>
		</Fragment>
	);
}

export default SortGamepage;