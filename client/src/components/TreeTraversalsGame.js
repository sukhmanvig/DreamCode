import '../css/TreeTraversalsStyle.css'
import React, { Fragment, useEffect } from 'react';
import TreeTraversalsGameLogic from './TreeTraversalsGameLogic'; 

const TreeTraversalsGame = ({title}) => {

    useEffect(() => {
        document.title = "Tree Traversals Game"
        TreeTraversalsGameLogic();
    }, []);

	return (	
        <main id="treetravgame">

		<div id="contentSec">
			<h1 className="gameTitle">Tree Traversals</h1>
			<span className="gpgBtn">Dashboard</span>
			<span className="gpgBtn">Tree Traversals Tutorial</span>
			
			<div id="gameWindow">
				<section>
					<div id="treeBuildDisplay"><h3 className="secHead">tree</h3>
						
						<div className="uChose"><pre></pre>
						</div>
						<div className="uChose"><pre></pre>
						</div>
						<div className="uChose"><pre></pre>
						</div>
					</div>
					<pre id="traversalCode"><span className="secHead">Traversal Code in Python</span>
					<code>
					</code></pre>
				</section>

				<section id="rightSidebar">
					
					<div id="travGameTimer"></div>
					<div id="gameInstruc"><span>Build the tree that would result in this traversal order.</span>
						<div id="travPrompt">traversal</div>
						# Match this output:
						<div id="orderPrompt">1, 2, 3, 4, 5, 6</div>
					</div>

					<div id="gameScore">SCORE: <span>0</span></div>
					<div id="matchBtn">MATCH</div>
				</section>
				<div id="gameOverlay">
					<div id="overlayContent">
						<h1>Tree Traversals</h1>
						Drag and drop nodes to build a binary tree! Your tree should yield the same output when traversed using the given traversal method.
						<div id="playBtn" className="menuBtn">PLAY</div>
					</div>
				</div>
			
			</div>
				

		
		</div>
	
	</main>

	)
}
		
export default TreeTraversalsGame