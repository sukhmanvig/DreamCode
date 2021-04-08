const ListsGameLogic = () => {
  var playBtn = document.createElement("div");
  playBtn.innerHTML = "Start Game";
  document.querySelector("#instructions").append(playBtn);
  playBtn.id = "playBtn";
  var gameTimer = document.querySelector("#timer");

  var gameContentWindow = document.querySelector("#listsGame");
  var gameOverlay = document.querySelector("#gameWindowOverlay");
  // Game Timer (see start function)
  var time = 30;

  var shopList = [];

  var _shoppingCart = [];
  var _selected = null;
  var _shopInventory = [
    "apples",
    "avocados",
    "bananas",
    "bandaids",
    "batteries",
    "bird seed",
    "bottled water",
    "bread",
    "broccoli",
    "butter",
    "canned soup",
    "cake",
    "cat food",
    "cereal",
    "cheese",
    "chocolate",
    "coffee",
    "cups",
    "dog food",
    "donuts",
    "eggs",
    "garbage bags",
    "gummy worms",
    "halls",
    "honey",
    "hot dogs",
  ];

  function drawGame(contentWindow) {
    //	background
    contentWindow.style.background = "#8F8F8F";

    createShelves();

    //	shopping cart

    var shopCartImg = document.createElement("img");
    shopCartImg.src = "../images/shoppingcart.png";
    shopCartImg.id = "shopCartImg";
    shopCartImg.setAttribute("draggable", "false");

    shopCartImg.addEventListener("dragover", (e) => {
      dragOver(e);
    });
    shopCartImg.addEventListener("dragend", (e) => {
      dragEnd(e);
    });
    shopCartImg.addEventListener("dragleave", (e) => {
      dragLeave(e);
    });
    shopCartImg.addEventListener("drop", (e) => {
      dragDrop(e);
    });

    document.querySelector("#shopCart").append(shopCartImg);

    genShopList();
    document.querySelector(
      "#shopListDisplay pre"
    ).innerHTML += formatListDisplay(shopList);

    var cartSortBtn = document.querySelector("#cartSortBtn");
    cartSortBtn.addEventListener("click", () => {
      sortShopList();
      showCmd("shopping_cart.sort()");
    });

    var cartPopBtn = document.querySelector("#cartPopBtn");
    cartPopBtn.addEventListener("click", popCartItem);

    var cartRemoveBtn = document.querySelector("#cartRemoveBtn");
    cartRemoveBtn.addEventListener("click", removeCartItem);

    var cartClearBtn = document.querySelector("#cartClearBtn");
    cartClearBtn.addEventListener("click", clearCartItems);

    var checkoutBtn = document.querySelector("#checkoutBtn");
    checkoutBtn.addEventListener("click", isWin);
  }

  function createShelves() {
    var shelves = [];

    for (let i = 0; i < 3; i++) {
      let shelf = document.createElement("div");
      let shelfItemsWrapper = document.createElement("ul");
      shelf.classList.add("shelf");
      shelfItemsWrapper.classList.add("shelf-items-wrapper");

      for (let i = 0; i < 70; i++) {
        // create shelf item elm
        // set data-itemName
        let ind = Math.floor(Math.random() * _shopInventory.length);
        let shelfItem = document.createElement("div");
        let shelfli = document.createElement("li");

        shelfItem.classList.add("shelfItem");
        shelfItem.innerHTML = _shopInventory[ind];
        shelfItem.setAttribute("draggable", "true");
        shelfItem.setAttribute("data-item-name", _shopInventory[ind]);

        shelfItem.addEventListener("dragstart", dragItemStart);
        shelfItem.addEventListener("dragend", dragItemEnd);

        shelfli.append(shelfItem);
        shelfItemsWrapper.append(shelfli);
      }

      shelf.append(shelfItemsWrapper);
      shelves.push(shelf);

      gameContentWindow.append(shelf);
    }
  }

  function startCd() {
    if (time >= 0) {
      if (time === 0) {
        gameTimer.innerHTML = "0:00";
        setTimeout(() => {
          gameTimer.style.fontSize = "xx-large";
          gameTimer.innerHTML = "Time's up!";
          gameOver();
        }, 1000);
      } else if (time === 10) {
        gameTimer.style.backgroundColor = "#E10002";
      } else if (time <= 9) {
        gameTimer.style.backgroundColor = "#E10002";
        gameTimer.innerHTML = "0:0" + time;
      } else gameTimer.innerHTML = "0:" + time;

      time--;
      //		console.log(time);
      setTimeout(startCd, 1000);
    }
  }

  playBtn.addEventListener("click", (e) => {
    time = 60;
    startCd();
    clearOverlay();

    drawGame(gameContentWindow);
    //										tapBtn.style.visibility = "visible";
  });

  function clearOverlay() {
    let cont = document.querySelector("#gameWindowOverlay");
    console.log(cont);
    cont.style.display = "none";
  }
  function dragItemStart() {
    console.log("item picked up");
    _selected = this;
    setTimeout(() => {
      this.style.visibility = "hidden";
    }, 0);
    let cartImg = document.querySelector("#shopCartImg");

    // so player can select behind the cart image
    setTimeout(() => {
      cartImg.style.pointerEvents = "all";
    }, 100);
  }
  function dragItemEnd() {
    console.log("end");
    this.style.visibility = "visible";
    let cartImg = document.querySelector("#shopCartImg");
    cartImg.style.pointerEvents = "none";
    _selected = null;
  }

  function dragOver(e) {
    e.preventDefault();
    console.log("ready to drop");
    let cartImg = document.querySelector("#shopCartImg");
    cartImg.classList.add("hovered");
  }
  // if player stops holding but doesn't drop over drop zone (shopping cart)
  function dragEnd(e) {
    console.log("stopped");
    let cartImg = document.querySelector("#shopCartImg");
    cartImg.classList.remove("hovered");
  }

  function dragLeave(e) {
    console.log("left drop zone");
    let cartImg = document.querySelector("#shopCartImg");
    cartImg.classList.remove("hovered");
  }

  function dragDrop(e) {
    console.log("added to shopping cart!");
    // append selected item to shop cart

    addToShopCart(_selected);
    e.target.append(_selected);
    showCmd(
      "shopping_cart.append('" + _selected.getAttribute("data-item-name") + "')"
    );

    let cartImg = document.querySelector("#shopCartImg");
    cartImg.removeChild(_selected);

    cartImg.classList.remove("hovered");
  }

  function showCmd(cmdStr) {
    let shopCart = document.querySelector("#shopCart");

    let p = document.createElement("p");
    p.innerHTML = cmdStr;
    p.id = "appendCmd";

    //	console.log(p)
    shopCart.append(p);
    setTimeout(() => {
      shopCart.removeChild(p);
    }, 2000);
  }

  function genShopList() {
    for (let i = 0; i < 10; i++) {
      let ind = Math.floor(Math.random() * _shopInventory.length);
      shopList.push(_shopInventory[ind]);
    }
    return shopList;
  }

  function formatListDisplay(lst) {
    let formattedString = lst.toString().split(",").join("\n");
    return formattedString;
  }

  function addToShopCart(item) {
    _shoppingCart.push(item.getAttribute("data-item-name"));

    // refresh
    let cartListDisplay = document.querySelector("#shopCartListDisplay pre");
    cartListDisplay.innerHTML = formatListDisplay(_shoppingCart);

    // refresh check for overflow
    cartListDisplay.style.overflowY = "auto";
  }

  function sortShopList() {
    _shoppingCart.sort();
    let cartListDisplay = document.querySelector("#shopCartListDisplay pre");
    cartListDisplay.innerHTML = formatListDisplay(_shoppingCart);
    cartListDisplay.style.overflowY = "auto";
  }

  function checkOpenMsg() {
    var mbox = document.querySelector("#msgBox");
    if (mbox) {
      document.querySelector("#sidebarRight").removeChild(mbox);
    }
  }
  function clearCartItems() {
    checkOpenMsg();
    let msg = document.createElement("div");

    let p1 = document.createElement("p");
    p1.innerHTML =
      "clear() empties your shopping cart but does not return items back on the shelf.";
    msg.append(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "Do you want to continue?";
    msg.append(p2);

    msg.id = "msgBox";

    let btnCancel = document.createElement("div");
    btnCancel.innerHTML = "cancel";
    btnCancel.classList.add("btn");
    btnCancel.id = "cancelClrBtn";
    msg.append(btnCancel);

    let btnClr = document.createElement("div");
    btnClr.innerHTML = "clear()";
    btnClr.classList.add("btn");
    btnClr.id = "clearListBtn";
    msg.append(btnClr);

    document.querySelector("#sidebarRight").append(msg);

    btnCancel.addEventListener("click", () => {
      document.querySelector("#sidebarRight").removeChild(msg);
    });
    btnClr.addEventListener("click", () => {
      _shoppingCart = [];
      document.querySelector("#sidebarRight").removeChild(msg);

      let cartListDisplay = document.querySelector("#shopCartListDisplay pre");
      cartListDisplay.innerHTML = formatListDisplay(_shoppingCart);
      showCmd("shopping_cart.clear()");
    });
  }

  function popCartItem() {
    checkOpenMsg();

    let msg = document.createElement("div");
    msg.id = "msgBox";

    let p1 = document.createElement("p");
    p1.innerHTML =
      "Pop an item by its position in the list. Indices start at 0. Leave empty to pop last item.";
    msg.append(p1);

    let inp = document.createElement("INPUT");
    inp.setAttribute("type", "number");
    inp.id = "popItemInp";
    msg.append(inp);

    let btnCancel = document.createElement("div");
    btnCancel.innerHTML = "cancel";
    btnCancel.classList.add("btn");
    btnCancel.id = "clearListBtn";
    msg.append(btnCancel);

    let btnPop = document.createElement("div");
    btnPop.innerHTML = "pop()";
    btnPop.classList.add("btn");
    btnPop.id = "popItemBtn";
    msg.append(btnPop);

    document.querySelector("#sidebarRight").append(msg);

    btnCancel.addEventListener("click", () => {
      document.querySelector("#sidebarRight").removeChild(msg);
    });

    let resp = document.createElement("p");
    resp.style.color = "red";
    msg.append(resp);

    btnPop.addEventListener("click", () => {
      let inp = document.getElementById("popItemInp").value;

      // check inp is number

      if (_shoppingCart.length === 0) {
        resp.innerHTML = "Cannot pop from empty list.";
      } else {
        if (inp === "") {
          let itemName = _shoppingCart.pop();

          checkOpenMsg();

          let msg = document.createElement("div");
          msg.id = "msgBox";

          let p1 = document.createElement("p");
          p1.innerHTML =
            "Item '" + itemName + "' was removed from shopping_cart";
          msg.append(p1);
          document.querySelector("#sidebarRight").append(msg);

          let cartListDisplay = document.querySelector(
            "#shopCartListDisplay pre"
          );
          cartListDisplay.innerHTML = formatListDisplay(_shoppingCart);

          showCmd("shopping_cart.pop()");

          setTimeout(() => {
            document.querySelector("#sidebarRight").removeChild(msg);
          }, 5000);
          // refresh display
        } else {
          let num = Number(inp);

          if (!isNaN(num) && Number.isInteger(num)) {
            // check does index exist
            let popped = _shoppingCart.splice(num, 1);
            if (popped.length !== 0) {
              // item was popped
              checkOpenMsg();

              let msg = document.createElement("div");
              msg.id = "msgBox";

              let p1 = document.createElement("p");

              p1.innerHTML =
                "Item '" + popped + "' was removed from shopping_cart";
              msg.append(p1);
              document.querySelector("#sidebarRight").append(msg);

              let cartListDisplay = document.querySelector(
                "#shopCartListDisplay pre"
              );
              cartListDisplay.innerHTML = formatListDisplay(_shoppingCart);

              showCmd("shopping_cart.pop(" + num + ")");

              setTimeout(() => {
                document.querySelector("#sidebarRight").removeChild(msg);
              }, 5000);
            } else {
              // item not found
              resp.innerHTML = "Index not in list.";
            }
          } else {
            resp.innerHTML = "Please input an integer.";
          }
        }
      }
    });
  }
  function removeCartItem() {
    checkOpenMsg();

    let msg = document.createElement("div");
    msg.id = "msgBox";

    let p1 = document.createElement("p");
    p1.innerHTML =
      "Search for an item by its name and remove the first matching element found.";
    msg.append(p1);

    let inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");
    inp.id = "removeItemInp";
    msg.append(inp);

    let btnCancel = document.createElement("div");
    btnCancel.innerHTML = "cancel";
    btnCancel.classList.add("btn");
    btnCancel.id = "clearListBtn";
    msg.append(btnCancel);

    let btnRemove = document.createElement("div");
    btnRemove.innerHTML = "remove()";
    btnRemove.classList.add("btn");
    btnRemove.id = "removeIBtn";
    msg.append(btnRemove);
    document.querySelector("#sidebarRight").append(msg);

    btnCancel.addEventListener("click", () => {
      document.querySelector("#sidebarRight").removeChild(msg);
    });

    let resp = document.createElement("p");
    resp.style.color = "red";
    msg.append(resp);

    btnRemove.addEventListener("click", () => {
      let inp = document.getElementById("removeItemInp").value;

      let ind = _shoppingCart.indexOf(inp);

      if (inp === "") {
        resp.innerHTML = "remove() takes exactly one argument.";
      } else if (ind === -1) {
        resp.innerHTML = "Item not found.";
      } else if (ind >= -1) {
        _shoppingCart.splice(ind, 1);

        // refresh display
        document.querySelector("#sidebarRight").removeChild(msg);

        let cartListDisplay = document.querySelector(
          "#shopCartListDisplay pre"
        );
        cartListDisplay.innerHTML = formatListDisplay(_shoppingCart);
        showCmd("shopping_cart.remove(''" + inp + "'')");
      } else {
        resp.innerHTML = "Something went wrong.";
        msg.append(resp);
      }
    });
  }

  //function checkoutCart() {
  //	gameOverlay.
  //}

  function isWin() {
    // copy array to new array
    // sort
    // compare
    // if yes win, else not quite
    if (shopList.length !== _shoppingCart.length) {
      showCmd("Keep trying!");
    } else {
      let sortedShopList = copyArray(shopList);
      let sortedCartList = copyArray(_shoppingCart);

      sortedShopList = sortedShopList.sort();
      sortedCartList = sortedCartList.sort();
      console.log(sortedShopList);
      console.log(sortedCartList);

      if (checkEqual(sortedCartList, sortedShopList)) {
        console.log("win");
        gameOverlay.style.display = "flex";
        let bye = document.querySelector("#instructions h1");
        bye.innerHTML = "YOU WIN";
        let btn = document.querySelector("#playBtn");
        btn.innerHTML = "Play Again";
        btn.addEventListener("click", () => {
          document.location.reload();
        });
        //	var playBtn = document.createElement("div");
        //	playBtn.innerHTML = "Start Game";
        //	document.querySelector("#instructions").append(playBtn);
        //	playBtn.id = "playBtn";
        //
        let shopListDisp = document.querySelector("#shopListDisplay");
        shopListDisp.style.display = "none";

        document.querySelector("#shopCart").style.display = "none";
      } else {
        showCmd("Keep trying!");
      }
    }
  }

  function copyArray(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      newarr.push(arr[i]);
    }
    return newarr;
  }

  function checkEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      console.log("arr1: " + arr1[i] + " arr2: " + arr2[i]);
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function gameOver() {
    gameOverlay.style.display = "flex";
    let bye = document.querySelector("#instructions h1");
    bye.innerHTML = "GAME OVER";
    let btn = document.querySelector("#playBtn");
    btn.innerHTML = "Play Again";
    btn.addEventListener("click", () => {
      document.location.reload();
    });
    //	var playBtn = document.createElement("div");
    //	playBtn.innerHTML = "Start Game";
    //	document.querySelector("#instructions").append(playBtn);
    //	playBtn.id = "playBtn";
    //
    let shopListDisp = document.querySelector("#shopListDisplay");
    shopListDisp.style.display = "none";

    document.querySelector("#shopCart").style.display = "none";
  }
};

export default ListsGameLogic;
