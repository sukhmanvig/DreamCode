const TreeTraversalsGameLogic = () => {
var gOverlay = document.querySelector("#treetravgame #gameOverlay")
var gameTimer = document.querySelector("#treetravgame #travGameTimer")
gameTimer.innerHTML = `1:00`
var playBtn = document.querySelector("#treetravgame #playBtn")
var travPrompt = document.querySelector("#treetravgame #travPrompt")
var orderPrompt = document.querySelector("#treetravgame #orderPrompt")
var opts = document.querySelectorAll("#treetravgame .uChose pre")
var matchFeedback = document.querySelector("#treetravgame #matchBtn")
var sc = document.querySelector("#treetravgame #gameScore span")
var travs = [`preorder(tree)`, `inorder(tree)`, `postorder(tree)`]
var travCode = [
`
def preorder(root):
    result = []
    if root:
        result.append(root.data)
        result = result + preorder(root.left)
        result = result + preorder(root.right)
    return result`,
`
def inorder(root):
    result = []
    if root:
        result += inorder(root.left)
        result.append(root.data)
        result += inorder(root.right)
    return result`,
`
def postorder(root):
    result = []
    if root:
        result += postorder(root.left)
        result += postorder(root.right)
        result.append(root.data)
    return result`]
    
var time = 59;
var _currentNodeValsList = []
var _currentTreeToMatch = null;
var _orderToMatch = null;

// 0 1 2
var _traversalPick = -1;

var _score = 0;
var _ans = -1;

var _choicesAns = [];

playBtn.addEventListener("click", startGame)

var choiceCard = document.querySelectorAll("#treetravgame .uChose")
for (let i = 0; i < 3; i++ ) {
    choiceCard[i].addEventListener("click", ()=>{selectOpt(i)
                                                console.log("clicked")})
}

function selectOpt(num) {
    if (_choicesAns[num] == true) {
        matchFeedback.style.background = "green";
        _score += 1;
        sc.innerHTML = _score
        setTimeout(()=>{matchFeedback.style.background = "grey"}, 300)
    }
    else {
        matchFeedback.style.background = "red";
        setTimeout(()=>{matchFeedback.style.background = "grey"}, 300)
        if (_score > 0) {
        _score--;
        sc.innerHTML = _score;
        }
    }
    genNewQuestion()
}
function startGame() {
    
    gOverlay.style.display = "none" 
    startCd()
    genNewQuestion() 
}

function endScreen() {
gOverlay.style.display = "flex"
    gOverlay.innerHTML =
`<div id="overlayContent">
    <h1>GAME OVER</h1>
    Your final score is : ${_score} !
    <div id="replayBtn" class="menuBtn">REPLAY</div>
</div>`

let replayBtn = document.querySelector("#treetravgame #replayBtn")
replayBtn.addEventListener("click", replay)
}

function replay() {
    
    time = 59;
    _currentNodeValsList = []
    _currentTreeToMatch = null;
    _orderToMatch = null;
    _choicesAns = [];
    var _traversalPick = -1;

    _score = 0;
    _ans = -1;
    gOverlay.style.display = "none" 
    startCd()
    genNewQuestion() 
}
function genNewQuestion() {
    let choice = chooseTraversal()
    let rootNode = genTree(genNodeValues(6))

    _currentTreeToMatch = rootNode
    
    switch (choice) {
        case 0:
            _orderToMatch = rootNode.preorder(rootNode)
            break;
        case 1:
            _orderToMatch = rootNode.inorder(rootNode)
            break;
        case 2:
            _orderToMatch = rootNode.postorder(rootNode)
            break;		
    }
    orderPrompt.innerHTML = _orderToMatch
    // console.log("orderToMatchHere : " + _orderToMatch)
    
    
}

function getRandomInt(max) {
    //max not included
    return Math.floor(Math.random() * max);

}

function chooseTraversal(){
    let tCode = document.querySelector("#treetravgame #traversalCode code")
    let choice = getRandomInt(3)
    _traversalPick = choice

    tCode.innerHTML = travCode[choice]
    travPrompt.innerHTML = travs[choice]
    
    return choice
}
function startCd() {
    if (time >= 0) {
        if (time == 0) {
            gameTimer.innerHTML = "0:00"
            setTimeout( ()=> {
                gameTimer.style.fontSize = "xx-large"
                gameTimer.innerHTML = "Time's up!"
                clearInterval()
                endScreen()

            }, 1000);
        } else if (time == 10) {
            gameTimer.style.backgroundColor = "#E10002";
        } else if (time <= 9) {
            gameTimer.style.backgroundColor = "#E10002"
            gameTimer.innerHTML = "0:0"+time
        } else
            gameTimer.innerHTML = "0:"+ time;

        time--;
//		console.log(time);
        setTimeout(startCd, 1000);
    }
}
//=============================================
class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insertLeft(node) {
        this.left = node
    }	
    
    insertRight(node) {
        this.right = node
    }

//	check height of tree
    height(root) {
        if (!root) {
            return 0;
        }
        let leftHeight = root.height(root.left)
        let rightHeight = root.height(root.left)
        return Math.max(leftHeight, rightHeight) + 1 
    }
    
//	preorder: root, left, right
    preorder(node) {
        let result = [];
        if (!node) return [];
        
        if (node) {
            result.push(node.data)
            if (node.left) result.push(node.preorder(node.left))
            if (node.right) result.push(node.preorder(node.right))
        }

        return result;		
    }
        
//	inorder: left root right
    inorder(node) {
        let result = [];
        if (node) {
            if (node.left) result.push(node.inorder(node.left))

            result.push(node.data)
            if (node.right) result.push(node.inorder(node.right))
        }

        return result;		
    }
        
//	postorder: left right root
    postorder(node) {
        let result = [];
        if (node) {
            if (node.left) result.push(node.postorder(node.left))
            if (node.right) result.push(node.postorder(node.right))
            result.push(node.data)
        }	
        return result;		
    }
}
//=============================================

function genNodeValues(numOfNodes) {
    let nodeVals = []
    let max = 100;
    
    
    for (let i = 0; i<numOfNodes; i++) {
        nodeVals.push(getRandomInt(max))
    }
//	orderPrompt.innerHTML = nodeVals
    _currentNodeValsList = nodeVals
    // console.log("generated node values: "+_currentNodeValsList)

    return nodeVals
}

function genTree(nodeValsList){
    let root = new Node(nodeValsList[0])
    
    // 9 not included
    let num = getRandomInt(9)
    
    root = chooseTreeStruct(num, root, nodeValsList)
    displayOptions(num, root)
    
    //test
    // console.log("case: "+ num)
    // console.log("original tree: "+root)
    
    return root
}

function chooseTreeStruct(num, root, nodeValsList){

    switch (num) {
        case 0:
            root.left = new Node(nodeValsList[1])
            root.left.left = new Node(nodeValsList[2])
            root.left.left.left = new Node(nodeValsList[3])
            root.left.left.left.left = new Node(nodeValsList[4])
            root.left.left.left.left.left = new Node(nodeValsList[5])
            break;
        case 1:
            root.left = new Node(nodeValsList[1])
            root.left.left = new Node(nodeValsList[2])
            root.left.left.left = new Node(nodeValsList[3])
            root.left.right = new Node(nodeValsList[4])
            root.right = new Node(nodeValsList[5])
            break;
        case 2:
            root.left = new Node(nodeValsList[1])
            root.left.left = new Node(nodeValsList[2])
            root.left.right = new Node(nodeValsList[3])
            root.right = new Node(nodeValsList[4])
            root.right.right = new Node(nodeValsList[5])
            break;
        case 3:
            root.left = new Node(nodeValsList[1])
            root.left.left = new Node(nodeValsList[2])
            root.left.right = new Node(nodeValsList[3])
            root.right = new Node(nodeValsList[4])
            root.right.left = new Node(nodeValsList[5])
            break;
        case 4:
            root.left = new Node(nodeValsList[1])
            root.left.left = new Node(nodeValsList[2])
            root.left.left.right = new Node(nodeValsList[3])
            root.right = new Node(nodeValsList[4])
            root.right.left = new Node(nodeValsList[5])
            break;
        case 5:
            root.left = new Node(nodeValsList[1])
            root.left.right = new Node(nodeValsList[2])
            root.right = new Node(nodeValsList[3])
            root.right.left = new Node(nodeValsList[4])
            root.right.right = new Node(nodeValsList[5])
            break;
        case 6:
            root.left = new Node(nodeValsList[1])
            root.right = new Node(nodeValsList[2])
            root.right.right = new Node(nodeValsList[3])
            root.right.right.left = new Node(nodeValsList[4])
            root.right.right.right = new Node(nodeValsList[5])
            break;				
        case 7:
            root.left = new Node(nodeValsList[1])
            root.right = new Node(nodeValsList[2])
            root.left.right = new Node(nodeValsList[3])
            root.left.right.left = new Node(nodeValsList[4])
            root.left.right.right = new Node(nodeValsList[5])
            break;				
        default:
            root.right = new Node(nodeValsList[1])
            root.right.left = new Node(nodeValsList[2])
            root.right.right = new Node(nodeValsList[3])
            root.right.right.left = new Node(nodeValsList[4])
            root.right.right.right = new Node(nodeValsList[5])
            }
    return root
}

function updateTreeStructs(){
var treeStructsVis = [
    ]
var treeStructs = [
//`(${_currentNodeValsList[0]})
// |
//(${_currentNodeValsList[1]})
// |
//(${_currentNodeValsList[2]})
// |
//(${_currentNodeValsList[3]})
// |
//(${_currentNodeValsList[4]})
// |
//(${_currentNodeValsList[5]})`,	
    
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.left.left = Node(${_currentNodeValsList[2]})
root.left.left.left = Node(${_currentNodeValsList[3]})
root.left.left.left.left = Node(${_currentNodeValsList[4]})
root.left.left.left.left.left = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.left.left = Node(${_currentNodeValsList[2]})
root.left.left.left = Node(${_currentNodeValsList[3]})
root.left.right = Node(${_currentNodeValsList[4]})
root.right = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.left.left = Node(${_currentNodeValsList[2]})
root.left.right = Node(${_currentNodeValsList[3]})
root.right = Node(${_currentNodeValsList[4]})
root.right.right = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.left.left = Node(${_currentNodeValsList[2]})
root.left.right = Node(${_currentNodeValsList[3]})
root.right = Node(${_currentNodeValsList[4]})
root.right.left = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.left.left = Node(${_currentNodeValsList[2]})
root.left.left.right = Node(${_currentNodeValsList[3]})
root.right = Node(${_currentNodeValsList[4]})
root.right.left = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.left.right = Node(${_currentNodeValsList[2]})
root.right = Node(${_currentNodeValsList[3]})
root.right.left = Node(${_currentNodeValsList[4]})
root.right.right = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.right = Node(${_currentNodeValsList[2]})
root.right.right = Node(${_currentNodeValsList[3]})
root.right.right.left = Node(${_currentNodeValsList[4]})
root.right.right.right = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.left = Node(${_currentNodeValsList[1]})
root.right = Node(${_currentNodeValsList[2]})
root.left.right = Node(${_currentNodeValsList[3]})
root.left.right.left = Node(${_currentNodeValsList[4]})
root.left.right.right = Node(${_currentNodeValsList[5]})`
,
`root = Node(${_currentNodeValsList[0]})
root.right = Node(${_currentNodeValsList[1]})
root.right.left = Node(${_currentNodeValsList[2]})
root.right.right = Node(${_currentNodeValsList[3]})
root.right.right.left = Node(${_currentNodeValsList[4]})
root.right.right.right = Node(${_currentNodeValsList[5]})`
    ]
    return treeStructs
}

function displayOptions(thisAns, compareToThis){
    // get opts display
//	_ans = num;
    // console.log("answer = " +thisAns)
    let ansOpts = updateTreeStructs()
    
//	get 3 random nums 
    let numsOpt = []
    
    while (numsOpt.length != 3) {
        // choosing grom list
        let n = getRandomInt(9)
        
        if (numsOpt.indexOf(n) == -1) {
            numsOpt.push(n)
        }		
    }
    
    // console.log("after whileloop: " + numsOpt)
//	for (let i = 0; i<3; i++) {
//
//	}
    
    if (numsOpt.indexOf(thisAns) == -1) {
        let ind = getRandomInt(3)
        numsOpt.splice(ind, 0, thisAns)
    }
    
    _ans = numsOpt.indexOf(thisAns)
    
    // console.log("choiceans = "+_ans)
    // console.log("final options: " + numsOpt)

    
    let tree1 = new Node(_currentNodeValsList[0])
    let tree2 = new Node(_currentNodeValsList[0])
    let tree3 = new Node(_currentNodeValsList[0])

    tree1 = chooseTreeStruct(numsOpt[0], tree1, _currentNodeValsList)
    tree2 = chooseTreeStruct(numsOpt[1], tree2, _currentNodeValsList)
    tree3 = chooseTreeStruct(numsOpt[2], tree3, _currentNodeValsList)

    let checking = traversalPick(_traversalPick, compareToThis)

    let or1 = traversalPick(_traversalPick, tree1)
    let or2 = traversalPick(_traversalPick, tree2)
    let or3 = traversalPick(_traversalPick, tree3)

    
    // console.log("orderToMatch : " + _orderToMatch)
    // console.log("currentTreeToMatch : " +  traversalPick(_traversalPick, currentTree))
    // console.log("tree1 : " + or1)
    // console.log("tree2 : " + or2)
    // console.log("tree3 : " + or3)

    // // console.log("checking: "+checking)
    // console.log(checkEq(copArray(or1), checking))
    // console.log(checkEq(copArray(or2), checking))
    // console.log(checkEq(copArray(or3), checking))

    _choicesAns = [
        checkEq(copArray(or1), checking),
        checkEq(copArray(or2), checking),
        checkEq(copArray(or3), checking)]

    // console.log(_choicesAns)
        // refers to querysel'd
    opts[0].innerHTML = `<code>${ansOpts[numsOpt[0]]}</code>`
    opts[1].innerHTML = `<code>${ansOpts[numsOpt[1]]}</code>`
    opts[2].innerHTML = `<code>${ansOpts[numsOpt[2]]}</code>`



}

function traversalPick(number, tree){
    let result = []
    // console.log("travPick = " + _traversalPick)
    switch (_traversalPick) {
        case 0:
            result = tree.preorder(tree)
            break;
        case 1:
            result = tree.inorder(tree)
            break;
        case 2:
            result = tree.postorder(tree)
            break;		
    }
    return result
}

function copArray(lst) {
    let newarr = []
    for (let i = 0; i< lst.length; i++) {
        newarr.push(lst[i])	
    }
    return newarr
}

function checkEq(a1, a2) {

    for (let i = 0; i < a1.length; i++) {
        let n1 = a1.toString(2)
        let n2 = a2.toString(2)

        if (n1 !== n2) return false
    }
    return true
}

}

export default TreeTraversalsGameLogic