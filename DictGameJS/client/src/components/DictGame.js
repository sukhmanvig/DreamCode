import React, { Fragment, useEffect } from 'react';
import '../css/dictgame-style.css';
import '../css/nav.css';
import { GameSetup, GenerateDict, CheckIfWon, GameRestart } from './DictGameLogic.js';

var MAX_NODES = 4;
var MIN_NODES = 1;

const DictGame = () => {
	useEffect(() => {
		GameSetup();

		var numNodes = Math.floor(Math.random()*(MAX_NODES-MIN_NODES)) + MIN_NODES;
		GenerateDict(document.querySelector("#dictContainer"), numNodes);

		numNodes = Math.floor(Math.random()*(MAX_NODES-MIN_NODES)) + MIN_NODES;
		GenerateDict(document.querySelector("#solDictContainer"), numNodes);

		if (CheckIfWon()) {
			GameRestart();
		}
	}, []);

    return(
        <Fragment>
	    <body id="dictgame_body">
	    	<div id="dictgame_content">
           		<h1 className="dictgame_h1">Dictionary Game</h1>
	    		<div id="gameWindow">
				<div id="gameDescription">
	    				<h2 className="dictgame_h2">Goal</h2>
	    				<p>Add and remove key-value pairs from the dictionary <strong>myDict</strong> so that it</p>
	    				<p> matches the dictionary <strong>targetDict</strong>.</p>
	    				<div id="gameStatus"></div>
	    				<button className="dictGameButton" id="toDictTutorial">Return to Tutorial</button>
	    				<button className="dictGameButton" id="dictShowHideCode">Show/Hide Code</button>
	    				<button className="dictGameButton" id="dictPlayAgain">Play Again</button>
	    				<div id="gameActions">
						<div id="dictModify">
	    						<h2 className="dictgame_h2">Dictionary Add/Update</h2>
	    						<label htmlFor="dictGameSelectAddKey">Key</label>
	    						<select id="dictGameSelectAddKey"></select>
	    						<label htmlFor="dictGameSelectAddValue">Value</label>
	    						<select id="dictGameSelectAddValue"></select>
	    						<div id="dictModifyStatus"></div>
	    						<button className="dictGameButton" id="dictGameButtonModify">Add Key and Value to Dictionary</button>
	   					</div>
						<div id="dictRemove">
	    						<h2 className="dictgame_h2">Dictionary Remove</h2>
	    						<label htmlFor="dictGameSelectRemoveKey">Key</label>
	    						<select id="dictGameSelectRemoveKey"></select>
	    						<div id="dictRemoveStatus"></div>
	    						<button className="dictGameButton" id="dictGameButtonRemove">Remove Key From Dictionary</button>
	   					</div>
					</div>
	    			</div>
				<div className="dictOuterContainer">
	    				<h2 className="dictgame_h2">myDict</h2>
		 			<div id="dictContainer">
	    				        <div id="dictKeys">
			 				<h3 className="dictgame_h3">Keys</h3>
	    		 	 		</div>
	    			 		<div id="dictValues">
	    		 				<h3 className="dictgame_h3">Values</h3>
	    			 		</div>
	    				</div>
	    			</div>
				<div className="dictOuterContainer">
	    				<h2 className="dictgame_h2">targetDict</h2>
					<div id="solDictContainer">
	    					 <div id="dictKeys">
						 	<h3 className="dictgame_h3">Keys</h3>
	    					 </div>
	    					 <div id="dictValues">
	    		 				<h3 className="dictgame_h3">Values</h3>
	    		 		 	 </div>
	   				</div>
	    			</div>
				<div id="dictCode">
              				<h2 className="dictgame_h2">Code For Actions</h2>
              				<div id="dictCodeOutput"></div>
	    			</div>
	    		</div>
	   	</div>
	   </body>
        </Fragment>
    );
}

export default DictGame;
