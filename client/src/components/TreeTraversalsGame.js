import '../css/TreeTraversalsStyle.css'
import React, { useEffect } from 'react';
import TreeTraversalsGameLogic from './TreeTraversalsGameLogic'; 
import { Link } from 'react-router-dom'

const TreeTraversalsGame = ({title}) => {

    useEffect(() => {
        document.title = "Tree Traversals Game"
        TreeTraversalsGameLogic();
    }, []);

	return (	
        <main id="treetravgame">

		<div id="contentSec">
			<h1 className="gameTitle">Tree Traversals</h1>
			<Link style={{textDecoration : 'none'}} to="/dashboard"><span className="gpgBtn">Dashboard</span></Link>
			<Link style={{textDecoration : 'none'}} to="/treetravtut"><span className="gpgBtn">Tree Traversals Tutorial</span></Link>
			
			<div id="treeGameWindow">
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
					<div id="gameInstruc"><span>Build the tree that would result in this traversal order!<br></br><br></br>
                        It might help to draw out the trees in the cards! Do the given traversal on the trees to see which ones match the output below.</span>
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
						Build the tree that yields the same output when traversed using the given traversal method.
						<div id="treePlayBtn" className="menuBtn">PLAY</div>
					</div>
				</div>
			
			</div>
				

		
		</div>
	
	</main>

	)
}
		
export default TreeTraversalsGame
