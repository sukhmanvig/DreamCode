import React, { Fragment, useEffect } from 'react';
import '../css/dictgame-style.css';
import '../css/nav.css';
import generateDict from './DictGameLogic.js';

var MAX_NODES = 5;
var MIN_NODES = 2;

const DictGame = () => {
	useEffect(() => {
		var numNodes = Math.floor(Math.random()*(MAX_NODES-MIN_NODES)) + MIN_NODES;
		generateDict(document.querySelector("#dictContainer"), numNodes);
		generateDict(document.querySelector("#solDictContainer"), numNodes);
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
	    				<h2 className="dictgame_h2">Dictionary Update</h2>
	    				<label for="dictGameSelectAddKey">Key</label>
	    				<select id="dictGameSelectAddKey"></select>
	    				<label for="dictGameSelectAddValue">Value</label>
	    				<select id="dictGameSelectAddValue"></select>
	    				<button className="dictGameButton">Add Key and Value to Dictionary</button>
	   			</div>
				<div id="dictRemove">
	    				<h2 className="dictgame_h2">Dictionary Remove</h2>
	    				<label for="dictGameSelectRemoveKey">Key</label>
	    				<select id="dictGameSelectRemoveKey"></select>
	    				<label for="dictGameSelectRemoveValue">Value</label>
	    				<select id="dictGameSelectRemoveValue"></select>
	    				<button className="dictGameButton">Add Key and Value to Dictionary</button>
	   			</div>

	    		</div>
	   	</div>
	   </body>
        </Fragment>
    );
}

export default DictGame;
