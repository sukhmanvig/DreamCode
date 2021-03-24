import React, { Fragment, useEffect } from 'react';
import '../css/dictgame-style.css';
import '../css/nav.css';
import { GameSetup, GenerateDict } from './DictGameLogic.js';

var MAX_NODES = 4;
var MIN_NODES = 1;

const DictGame = () => {
	useEffect(() => {
		GameSetup();

		var numNodes = Math.floor(Math.random()*(MAX_NODES-MIN_NODES)) + MIN_NODES;
		GenerateDict(document.querySelector("#dictContainer"), numNodes);

		numNodes = Math.floor(Math.random()*(MAX_NODES-MIN_NODES)) + MIN_NODES;
		GenerateDict(document.querySelector("#solDictContainer"), numNodes);
	});

    return(
        <Fragment>
	    <body id="dictgame_body">
	    	<div id="dictgame_content">
           		<h1 className="dictgame_h1">Dictionary Game</h1>
	    		<div id="gameWindow">
				<div className="dictOuterContainer">
	    				<h2 className="dictgame_h2">Target Dictionary</h2>
					<div id="solDictContainer">
	    					 <div id="dictKeys">
						 	<h3 className="dictgame_h3">Keys</h3>
	    					 </div>
	    					 <div id="dictValues">
	    		 				<h3 className="dictgame_h3">Values</h3>
	    		 		 	 </div>
	   				</div>
	    			</div>
	    			<div className="dictOuterContainer">
	    				<h2 className="dictgame_h2">Your Dictionary</h2>
		 			<div id="dictContainer">
	    				        <div id="dictKeys">
			 				<h3 className="dictgame_h3">Keys</h3>
	    		 	 		</div>
	    			 		<div id="dictValues">
	    		 				<h3 className="dictgame_h3">Values</h3>
	    			 		</div>
	    				</div>
	    			</div>
	    			<div id="dictModify">
	    				<h2 className="dictgame_h2">Dictionary Add/Update</h2>
	    				<label htmlFor="dictGameSelectAddKey">Key</label>
	    				<select id="dictGameSelectAddKey"></select>
	    				<label htmlFor="dictGameSelectAddValue">Value</label>
	    				<select id="dictGameSelectAddValue"></select>
	    				<button className="dictGameButtonUpdate">Add Key and Value to Dictionary</button>
	   			</div>
				<div id="dictRemove">
	    				<h2 className="dictgame_h2">Dictionary Remove</h2>
	    				<label htmlFor="dictGameSelectRemoveKey">Key</label>
	    				<select id="dictGameSelectRemoveKey"></select>
	    				<label htmlFor="dictGameSelectRemoveValue">Value</label>
	    				<select id="dictGameSelectRemoveValue"></select>
	    				<button className="dictGameButtonRemove">Remove Key and Value From Dictionary</button>
	   			</div>

	    		</div>
	   	</div>
	   </body>
        </Fragment>
    );
}

export default DictGame;
