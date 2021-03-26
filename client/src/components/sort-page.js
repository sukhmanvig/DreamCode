import React, { Fragment, useEffect } from "react";
import SortGameJS from "./sort.js";

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
				<input class="game_input" type="text" id="init-array-entries" placeholder="Entries" />
				<button className="game_button" id="init-array">Randomize array</button>
				<gamestage id="gamestage">
					...
				</gamestage>
				<button className="game_button" id="TEST">TEST</button>
			</body>
		</Fragment>
	);
}

export default SortGamepage;