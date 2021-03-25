var nodeTypes = ['square', 'triangle', 'circle'];

const GameSetup = () => {
	//Add event listeners
	document.querySelector(".dictGameButtonUpdate").addEventListener('click', updateKeyValue);
	document.querySelector(".dictGameButtonRemove").addEventListener('click', removeKeyValue);

	//Prepopulate select dropdowns
	var addKeySelect = document.querySelector("#dictGameSelectAddKey");
	var addValueSelect = document.querySelector("#dictGameSelectAddValue");
	var removeKeySelect = document.querySelector("#dictGameSelectRemoveKey");
	var removeValueSelect = document.querySelector("#dictGameSelectRemoveValue");

	var selectLists = [addKeySelect, addValueSelect, removeKeySelect, removeValueSelect];
	var i, j = 0;
	var option, selectList = "";

	for (i = 0; i < selectLists.length; i++) {

		//select list to append to
		selectList = selectLists[i];
		for (j = 0; j < nodeTypes.length; j++) {
			option = document.createElement('option');
			option.value = nodeTypes[j];
			option.innerHTML = nodeTypes[j];
			selectList.appendChild(option);
		}
	}
}


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
    imgNode.src = 'images/' + type + '.png';
    imgNode.alt =  type;

    return imgNode;
}

const updateKeyValue = () => {
	var keySelect = document.querySelector("#dictGameSelectAddKey");
	var valSelect = document.querySelector("#dictGameSelectAddValue");

	var keyClass = keySelect.options[keySelect.selectedIndex].value; //key to add
	var valClass = valSelect.options[valSelect.selectedIndex].value; //value to add
	
	var keyColumn = document.querySelector("#dictContainer #dictKeys");
	var valColumn = document.querySelector("#dictContainer #dictValues");  

	var i = 0;
	var key, keyIndex = -1;
	var valNode, keyNode = '';

	//Find key index in key column
	for (i = 1; i < keyColumn.childElementCount; i++) {
		key = keyColumn.childNodes[i];

		if (keyClass === key.childNodes[0].className.trim()) {
			//found index of key
			keyIndex = i;
			break;
		}
	}

	//Key-value pair doesn't exist
	if (keyIndex === -1) {

		//Create key-value blocks
        	var keyBlock = document.createElement('div');
		var valBlock = document.createElement('div');
        	keyBlock.className += ' keyBlock';
		valBlock.className += ' valueBlock';


        	//Create key-value nodes
        	keyNode = createNode(keyClass);
		valNode = createNode(valClass);
        	keyBlock.appendChild(keyNode);
		valBlock.appendChild(valNode);

        
       	 	//Append key-value blocks to container
        	keyColumn.appendChild(keyBlock);
		valColumn.appendChild(valBlock);

		return;
	}
	
	//Overwite value in dictionary
	var val = valColumn.childNodes[keyIndex];

	if (typeof val === 'undefined') {
		console.log("Dictionary is malformed.");
		return;
	}
	
	valNode = createNode(valClass);
	val.textContent = '';
	val.appendChild(valNode);
}

const removeKeyValue = () => {
}

export {GameSetup, GenerateDict};
