/**
 */
const SortGameJS = () => {
	var moves = 0;
	var id = null;
	var level = -1;
	var array = null;
	
	// Input state is based on the swap inputs clicked.
	var swapinputs = [null, null];
	
	/** Add the on-click listeners */
	document.querySelector("#init-array").addEventListener('click', ()=>{
		// Perform array initialization
		var entries = parseInt(document.querySelector("#init-array-entries").value);
		console.log("Created array of size " + entries);
		if (isNaN(entries))
			entries=12;
		initRandom(entries,0,12);

		// Put array and array buttons to front end
		document.querySelector("#gamestage").innerHTML = "";
		var swaplisteners = [];
		var tablehtml = "";
		tablehtml += "<table>";
		// Show numbers
		tablehtml += "<tr>";
		for (var k = 0; k < array.length; k++) {
			tablehtml += `<td id=index_${k}>` + array[k] + "</td>";
		}
		tablehtml += "</tr>";
		// Add buttons
		tablehtml += "<tr>";
		for (var k = 0; k < array.length; k++) {
			tablehtml += "<td>" + `<button id=swap_${k}>Swap</button>` + "</td>";
			swaplisteners[k] = clickSwapInput(k);
		}
		tablehtml += "</tr>";
		tablehtml += "</table>";
		document.querySelector("#gamestage").innerHTML = tablehtml;
		// Add button functionalities
		for (var k = 0; k < array.length; k++) {
			document.querySelector(`#swap_${k}`).addEventListener('click', 
				swaplisteners[k]
			);
			console.log("Added swap functionality to button " + k);
		}
		console.log(swaplisteners);

	});

	document.querySelector("#TEST").addEventListener('click', ()=>{
		console.log("OMG");
	});

	/**Initialize the game.
	 * @param {*} entries 
	 * @param {*} min 
	 * @param {*} max 
	 */
	function initRandom(entries=12, min=0, max=12) {
		// Set up array
		array = []
		for (var k = 0; k < entries; k++)
			array[k] = Math.trunc(Math.random()*(max-min+1));

		// Reset moves
		moves = 0;
		swapinputs = [null, null];
	}

	/**Determine if array is sorted.
	 * @param {*} sc 
	 * @returns If the array is sorted in ascending or descending order.
	 */
	function isSorted(sc) {
		var falsecriteria = function(){};
		if (sc == -1)
			falsecriteria = function(k){return (array[k] > array[k-1])}
		else if (sc == 1)
			falsecriteria = function(k){return (array[k] < array[k-1])}
		else
			throw 'Need to specify -1 for descending and +1 for ascending'
		if (array == null)
			throw 'Array is nonexistant, cannot sort';
		
		for (var k = 1; k < array.length; k++) {
			if (falsecriteria(k))
				return false;
		}
		return true;
	}

	/**Update the input based on swap buttons pressed.
	 * @param {*} k 
	 */
	function clickSwapInput(swapbutton_index) {
		return function(){
			var k = swapbutton_index;
			console.log(swapinputs);
			if (swapinputs[0] === null)
				swapinputs[0] = k;
			else if (swapinputs[0] === k)
				swapinputs[0] = null;
			else {
				swap(swapinputs[0], k);
				console.log("Swapped elements of position" + swapinputs[0] + " and " + k);
				for (var k = 0; k < array.length; k++) {
					document.querySelector(`#index_${k}`).innerHTML = array[k];
				}
				swapinputs[0] = null;
			}
		}
	}

	/**Perform a swap. 
	 * @param {*} k1 
	 * @param {*} k2 
	 */
	function swap(k1, k2) {
		if (!inbounds(k1, array) || !inbounds(k2, array))
			throw 'One of the indices are out of bounds';
		// Perform swap
		var temp = array[k1];
		array[k1] = array[k2];
		array[k2] = temp;
		// Increment moves
		moves++;
	}
}

/**Auxiliary function to determine if index is in bounds.
 */
function inbounds(k, array) {
	if (array == null)
		throw 'Array is nonexistant, cannot sort';
	return (k >= 0 && k < array.length);
}

export default SortGameJS;