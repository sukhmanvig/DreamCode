import React, { Fragment, useEffect } from 'react';
import '../css/dictgame-style.css';
import '../css/nav.css';
import DictGameLogic from './DictGameLogic.js';

const DictGame = () => {
	useEffect(() => {
		DictGameLogic();
	});

    return(
        <Fragment>
	    <body id="dictgame_body">
	    	<div id="dictgame_content">
           		 <h1 className="dictgame_h1">Dictionary Game</h1>
				 
				 <div id="dictContainer">
	    			 <div id="dictKeys"></div>
	    			 <div id="dictValues"></div>
	    			</div>
	   		</div>
	   </body>
        </Fragment>
    );
}

export default DictGame;
