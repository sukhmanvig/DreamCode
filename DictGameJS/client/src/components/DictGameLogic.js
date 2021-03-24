var MAX_NODES = 5;
var MIN_NODES = 2;

const testGrid = () => {    
    var num_nodes = Math.floor(Math.random()*(MAX_NODES-MIN_NODES)) + MIN_NODES;

    //Get dictionary and declare nodes
    var dict = document.querySelector('#dictContainer');

    var i, j, rand, node = 0;
    var block, blockId, currentCtr = "";
    var nodeType = 'square';
    var nodeTypes = ['square', 'triangle', 'circle'];
    var columns = ['key', 'value'];


    for (i = 0; i < columns.length; i++) {

	//Set container to fill and block type (key or value)
	currentCtr = dict.childNodes[i]; 
	blockId = columns[i];
	

    	//Add blocks and nodes
    	for (j = 0; j < num_nodes; j++) {
        	rand = Math.floor(Math.random()*(nodeTypes.length));
        	nodeType = nodeTypes[rand];

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

    imgNode.addEventListener('dragstart', dragStart);
    imgNode.addEventListener('dragover', dragOver);
    imgNode.addEventListener('drop', dragDrop);

    return imgNode;
}

const dragStart = e => {
}

const dragOver = e => {
    e.preventDefault();
}

const dragDrop = e => {
}

export default testGrid;
