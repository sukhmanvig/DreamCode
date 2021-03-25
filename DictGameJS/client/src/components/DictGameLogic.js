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
}

const removeKeyValue = () => {
}

export {GameSetup, GenerateDict};
