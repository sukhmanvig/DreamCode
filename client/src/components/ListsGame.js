import React, { Fragment, useEffect } from "react";
import "../css/lists-game-style.css";
import ListsGameLogic from "./ListsGameLogic.js";
import { Link } from "react-router-dom";

const ListsGame = () => {
  useEffect(() => {
    document.title = "Python Lists Game";
    ListsGameLogic();
  }, []);

  return (
    <Fragment>
      <main className="listgamestyle">
        <div className="header">
          <h1 id="gameTitle">Python Lists</h1>
          <Link style={{textDecoration : 'none'}} to="/dashboard"><span className="gpgBtn">Dashboard</span></Link>
			    <Link style={{textDecoration : 'none'}} to="/ListsGameTutorial"><span className="gpgBtn">Python Lists Tutorial</span></Link>
        </div>
        <div id="gameWindow">
          {/* {`<!--game content window-->`} */}

          <div id="listsGame">
            <div id="shopListDisplay">
              <h2>shopping list</h2>
              {/* {`<!--do not indent pre tags-->`} */}

              <pre></pre>
            </div>
            <div id="shopCart">
              {/* {<!--					display shopping cart image here--> */}
              {/* <!--<p id="appendCmd">This is where command particles appear.</p>--> */}
            </div>
          </div>
          {/* {`<!--Timer and shopping cart list-->`}			 */}

          <div id="sidebarRight">
            <div id="timer">Timer</div>
            <div id="shopCartListDisplay">
              <h2>shopping cart</h2>
              {/* {`<!--do not indent pre tags-->`} */}
              <pre></pre>
            </div>
            <div id="lstCtrls">
              <div id="cartSortBtn">sort()</div>
              <div id="cartPopBtn">pop()</div>
              <div id="cartRemoveBtn">remove()</div>
              <div id="cartClearBtn">clear()</div>
              <div id="checkoutBtn">check equal lists</div>
            </div>
          </div>

          {/* {`<!--for menu overlays-->`} */}
          <div id="gameWindowOverlay">
            <div id="instructions">
              <h1>Learn Python Lists!</h1>
              <p>
                Add items to your shopping cart to match your shopping list!
              </p>
              <p>
                Drag and drop shelf items to your cart or type python list
                commands!
              </p>
            </div>
          </div>
        </div>
      </main>
      <script src="js/game-pythonlists.js"></script>
    </Fragment>
  );
};

export default ListsGame;
