var nodeTypes = ['square', 'triangle', 'circle'];
var MAX_CODE_LINES = 12;
//Keep track of score
var modifyScore = 0;
var removeScore = 0;

const GameSetup = () => {
	//Add event listeners
	document.querySelector("#dictGameButtonModify").addEventListener('click', modifyKeyValue);
	document.querySelector("#dictGameButtonRemove").addEventListener('click', removeKey);
	document.querySelector("#dictPlayAgain").addEventListener('click', GameRestart);
	document.querySelector("#dictShowHideCode").addEventListener('click', ChangeCodeVisibility);

	//Prepopulate select dropdowns
	var addKeySelect = document.querySelector("#dictGameSelectAddKey");
	var addValueSelect = document.querySelector("#dictGameSelectAddValue");
	var removeKeySelect = document.querySelector("#dictGameSelectRemoveKey");

	var selectLists = [addKeySelect, addValueSelect, removeKeySelect];
	var i, j = 0;
	var option, selectList = "";

	for (i = 0; i < selectLists.length; i++) {

		//select list to append to
		selectList = selectLists[i];
		for (j = 0; j < nodeTypes.length; j++) {
			option = document.createElement('option');
			option.value = nodeTypes[j];
			option.innerHTML = nodeTypes[j].charAt(0).toUpperCase() + nodeTypes[j].slice(1);
			selectList.appendChild(option);
		}
	}
}

//Restart the dictionary game
const GameRestart = () => {
	//reload window
	window.location.reload();
}

//Generate a dictionary
const GenerateDict = (dictCtr, numNodes) => {    
   
    var i, j, rand, node = 0;
    var block, blockId, currentCtr = "";
    var nodeType = 'square';
    var columns = ['key', 'value'];

    if (numNodes > nodeTypes.length) {
	    console.log("Dictionary length is greater than number of keys.");
	    return;
    }

    for (i = 0; i < columns.length; i++) {

	//Set container to fill and block type (key or value)
	currentCtr = dictCtr.childNodes[i]; 
	blockId = columns[i];
	
    	//Add blocks and nodes
    	for (j = 0; j < numNodes; j++) {

		//Get node type (if value node, then type is random)
		rand = Math.floor(Math.random()*(nodeTypes.length));
		nodeType = (blockId === 'key') ? nodeTypes[j] : nodeTypes[rand];

        	//Create block (container for node)
        	block = document.createElement('div');
        	block.className += ' '+ blockId + 'Block';

        	//Create node and add it to block
        	node = createNode(nodeType);
        	block.appendChild(node);
        
       	 	//Append block to container
        	currentCtr.appendChild(block);
    	}
   }
}

//Create a grid node
const createNode = type => {

    var imgNode = document.createElement('img');
    imgNode.className += (' ' +  type);
    imgNode.src = 'images/dict' + (type.charAt(0).toUpperCase() + type.slice(1)) + '.png';
    imgNode.alt =  type;
	imgNode.draggable = false;

    return imgNode;
}

//Add/update key-value in the user dictionary
const modifyKeyValue = () => {
	clearGameStatus();

	//Get user selected values
	var keySelect = document.querySelector("#dictGameSelectAddKey");
	var valSelect = document.querySelector("#dictGameSelectAddValue");

	var keyClass = keySelect.options[keySelect.selectedIndex].value.toLowerCase(); //key to add
	var valClass = valSelect.options[valSelect.selectedIndex].value.toLowerCase(); //value to add
	
	//Dictionary Columns
	var keyColumn = document.querySelector("#dictContainer #dictKeys");
	var valColumn = document.querySelector("#dictContainer #dictValues");  

	//Clear error messages
	var modifyStatus = document.querySelector("#dictModifyStatus");
	modifyStatus.innerHTML = '';

	var i = 0;
	var keyBlock = -1;
	var keyIndex = -1;
	var valNode = '';
	var keyNode = '';

	//Find key index in key column
	for (i = 1; i < keyColumn.childElementCount; i++) {
		keyBlock = keyColumn.childNodes[i];

		if (keyClass === keyBlock.childNodes[0].className.trim()) {
			//found index of key
			keyIndex = i;
			break;
		}
	}

	//Key-value pair doesn't exist
	if (keyIndex === -1) {

		//Create key-value blocks
        	var newKeyBlock = document.createElement('div');
		var valBlock = document.createElement('div');
        	newKeyBlock.className += ' keyBlock';
		valBlock.className += ' valueBlock';


        	//Create key-value nodes
        	keyNode = createNode(keyClass);
		valNode = createNode(valClass);
        	newKeyBlock.appendChild(keyNode);
		valBlock.appendChild(valNode);

        
       	 	//Append key-value blocks to container
        	keyColumn.appendChild(newKeyBlock);
		valColumn.appendChild(valBlock);
		
		//Add equivalent code line to output section
		PrintCodeLine(`myDict["` + keyClass + `"] = "` + valClass + `"`);
	
		//Check if game is won
		if(CheckIfWon()) {
			onWon();
		}

		return;
	}
	
	//Overwite value in dictionary
	var val = valColumn.childNodes[keyIndex];

	//Value not found
	if (typeof val === 'undefined') {
		modifyStatus.textContent = "Oops the dictionary is corrupted. Please refresh the page.";
		return;
	}
	
	valNode = createNode(valClass);
	val.textContent = '';
	val.appendChild(valNode);

	//Add equivalent code to code output section
	PrintCodeLine(`myDict["` + keyClass + `"] = "` + valClass + `"`);

	// Update score
	modifyScore++;
	document.querySelector("#dictModifications").innerHTML = modifyScore;

	if (CheckIfWon()) {
		onWon();
	}
}

//Remove key-value pair in the user dictionary if it exists
const removeKey = () => {
	clearGameStatus();

	var keySelect = document.querySelector("#dictGameSelectRemoveKey");

	var keyClass = keySelect.options[keySelect.selectedIndex].value.toLowerCase(); //key to remove
	
	var keyColumn = document.querySelector("#dictContainer #dictKeys");
	var valColumn = document.querySelector("#dictContainer #dictValues"); 

	//Clear any error messages
	var removeStatus = document.querySelector("#dictRemoveStatus");
	removeStatus.innerHTML = '';

	var i = 0;
	var keyBlock = -1;
	var keyIndex = -1;

	//Find key index in key column
	for (i = 1; i < keyColumn.childElementCount; i++) {
		keyBlock = keyColumn.childNodes[i];

		if (keyClass === keyBlock.childNodes[0].className.trim()) {
			//found index of key
			keyIndex = i;
			break;
		}
	}

	//Key not found
	if (keyIndex === -1) {
		removeStatus.textContent = "The key \"" + (keyClass.charAt(0).toUpperCase() + keyClass.slice(1)) + "\" does not exist.";
		return;
	}

	//Delete key
	var key = keyColumn.childNodes[keyIndex];
	keyColumn.removeChild(key);

	//Delete value
	var val = valColumn.childNodes[keyIndex];

	//Value not found
	if (typeof val === 'undefined') {
		removeStatus.textContent = "Oops the dictionary is corrupted. Please refresh the page.";
		return;
	}

	valColumn.removeChild(val);

	PrintCodeLine(`del myDict["`+ keyClass + `"]`); 

	// Update score
	removeScore++;
	document.querySelector("#dictRemovals").innerHTML = removeScore;

	//Check if game is won
	if(CheckIfWon()) {
		onWon();
	}
}

//Returns true if "Your Dictionary" matches "Target Dictionary", false otherwise
const CheckIfWon = () => {
	//Compare user dictionary keys to solution dictionary keys
	var userDictKeys = document.querySelector("#dictContainer #dictKeys");
	var solDictKeys = document.querySelector("#solDictContainer #dictKeys");

	var userDictVals = document.querySelector("#dictContainer #dictValues");
	var solDictVals = document.querySelector("#solDictContainer #dictValues"); 

	var i = 0;

	//Check if dictionary is valid
	if ((userDictKeys.childElementCount !== solDictKeys.childElementCount) || 
	    (userDictVals.childElementCount !== solDictVals.childElementCount) ||
	    (userDictKeys.childElementCount !== userDictVals.childElementCount)||
	    (solDictKeys.childElementCount !== solDictVals.childElementCount)) {

		return false;
	}

	//Compare keys to values
	for (i = 0; i < userDictKeys.childElementCount; i++) {
		if (userDictKeys.childNodes[i].innerHTML !== solDictKeys.childNodes[i].innerHTML) {
			return false;
		}
		if (userDictVals.childNodes[i].innerHTML !== solDictVals.childNodes[i].innerHTML) {
			return false;
		}
	}
	return true;
}


//Disable dictionary modification buttons and show play again button on win
const onWon = () => {
	//Set status
	var gameStatus = document.querySelector("#gameStatus");
	gameStatus.innerHTML = "Congratulations! <strong>myDict</strong> matches <strong>targetDict</strong>.";

	//Show play again button
	var playAgainButton = document.querySelector("#dictPlayAgain");
	playAgainButton.style.visibility = "visible";

	//Disable modify/remove buttons
	var modifyKeySubmit = document.querySelector("#dictGameButtonModify");
	var removeKeySubmit = document.querySelector("#dictGameButtonRemove");

	var addKeySelect = document.querySelector("#dictGameSelectAddKey");
	var addValSelect = document.querySelector("#dictGameSelectAddValue");
	var removeKeySelect = document.querySelector("#dictGameSelectRemoveKey");


	modifyKeySubmit.disabled = true;
	removeKeySubmit.disabled = true;
	addKeySelect.disabled = true;
	addValSelect.disabled = true;
	removeKeySelect.disabled = true;

	//Remove click listeners
	modifyKeySubmit.removeEventListener('click', modifyKeyValue);
	removeKeySubmit.removeEventListener('click', removeKey);
}

//Clear all game status tags
const clearGameStatus = () => {
	var gameStatusTags = document.querySelectorAll("[id*='Status']");
	var i = 0;
	for (i = 0; i < gameStatusTags.length; i++) {
		gameStatusTags[i].textContent = '';
	}
}


//Add code line to output section
const PrintCodeLine = codeLine => {
	var codeOutput = document.querySelector("#dictCodeOutput");

	//Clear code output section if line limit is exceeded
	if (codeOutput.childElementCount > MAX_CODE_LINES) {
		codeOutput.textContent = '';
	}

	var preTag = document.createElement('pre');
	preTag.className = 'dictgame_pre';
	
	var codeTag = document.createElement('code');
	codeTag.innerHTML = codeLine;

	preTag.appendChild(codeTag);
	codeOutput.appendChild(preTag);
}



//show/hide the code section
const ChangeCodeVisibility = () => {
	var code = document.querySelector("#dictCode");
	if (getComputedStyle(code).display === "block") {
		code.style.display = "none";
	}
	else {
		code.style.display = "block";
	}
}

export {GameSetup, GenerateDict, CheckIfWon, GameRestart};
