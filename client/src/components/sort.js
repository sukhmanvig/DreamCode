/**
 */
const SortGameJS = () => {
	var moves = 0;
	var id = null;
	var level = -1;
	var array = null;
	
	// Input state is based on the swap inputs clicked.
	var gamestate = {
		swapinputs: [null, null],
		autosolve: null,
		autosolvehint: [-1, null]
	};
	
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
			tablehtml += "<td>" + `<button id=swap_${k} class="game_button">Swap #${k}</button>` + "</td>";
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
		}

		// Enable hints
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].removeAttribute("disabled");
		}
		document.querySelector("#sortstep").setAttribute("disabled", "true");
		console.log(swaplisteners);

	});

	document.querySelector("#sortstep").addEventListener('click', ()=>{
		if (gamestate.autosolve == "Selection") {
			console.log(gamestate.autosolve);
			var recmin = NaN;
			var kmin = gamestate.autosolvehint[0];
			var innersteps = 0;
			for (var k = gamestate.autosolvehint[0]; k < array.length; k++) {
				gamestate.autosolvehint[1]++;
				innersteps++;
				console.log(recmin, array[k]);
				if (isNaN(recmin) || array[k] < recmin) {
					recmin = array[k];
					kmin = k;
				}
			}

			document.querySelector("#gamehint").innerHTML = `Swap element #${gamestate.autosolvehint[0]} with #${kmin}. ${gamestate.autosolvehint[1]} steps total. ${innersteps} steps for this outer loop.`;
			// Perform updating swap
			clickSwapInput(gamestate.autosolvehint[0])();
			clickSwapInput(kmin)();
			gamestate.autosolvehint[0]++;
		}
		else if (gamestate.autosolve == "Insertion") {
			console.log(gamestate.autosolve);
			var k = NaN;
			for (k = gamestate.autosolvehint[0]; k > 0 && array[k-1] < array[k]; k--) {
				gamestate.autosolvehint[1]++;
				// Perform updating swap
				clickSwapInput(k-1)();
				clickSwapInput(k)();
			}

			document.querySelector("#gamehint").innerHTML = `"Inserted" element #${gamestate.autosolvehint[0]} at position #${k}. ${gamestate.autosolvehint[1]} bubbles total.`;
			gamestate.autosolvehint[0]++;
		}
		else if (gamestate.autosolve == "Quick") {
			console.log(gamestate.autosolve);
		}
		else if (gamestate.autosolve == "Radix") {
			console.log(gamestate.autosolve);
		}
		else {
			console.log("OMG");
		}
	});

	document.querySelector("#selectionsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		gamestate.autosolve = "Selection";
		gamestate.autosolvehint = [0, 0];

		document.querySelector("#gamehint").innerHTML = "Starting Selection Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#selectionsort").className = "game_button sorthint active";
	});

	document.querySelector("#insertionsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		gamestate.autosolve = "Insertion";
		gamestate.autosolvehint = [0, 0];
		
		document.querySelector("#gamehint").innerHTML = "Starting Insertion Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#insertionsort").className = "game_button sorthint active";
	});

	document.querySelector("#quicksort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		gamestate.autosolve = "Quick";
		gamestate.autosolvehint = [0, "Start Quick Sort"];
		
		document.querySelector("#gamehint").innerHTML = "Starting Quick Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#quicksort").className = "game_button sorthint active";
	});

	document.querySelector("#radixsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		gamestate.autosolve = "Radix";
		gamestate.autosolvehint = [0, "Start Radix Sort"];
		
		document.querySelector("#gamehint").innerHTML = "Starting Radix Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#radixsort").className = "game_button sorthint active";
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
		gamestate.swapinputs = [null, null];

		// Reset view
		document.querySelector("#gamestate").innerHTML = "Initialized game";
	}

	/**Determine if array is sorted.
	 * @param {*} sc 
	 * @returns If the array is sorted in ascending or descending order.
	 */
	function isSorted(sc) {
		// Determine function to detect criteria for not being sorted.
		var falsecriteria = function(){};
		if (sc == -1)
			falsecriteria = function(k){return (array[k] > array[k-1])}
		else if (sc == 1)
			falsecriteria = function(k){return (array[k] < array[k-1])}
		else
			throw 'Need to specify -1 for descending and +1 for ascending'
		// Input check
		if (array == null)
			throw 'Array is nonexistant, cannot sort';
		// Perform linear search to see if array is sorted.
		for (var k = 1; k < array.length; k++) {
			if (falsecriteria(k))
				return false;
		}
		return true;
	}

	/**Update the input based on swap buttons pressed.
	 * @param {*} k1 The number associated with the swap button
	 */
	function clickSwapInput(k1) {
		return function(){
			var k = k1;
			console.log("State:" + gamestate.swapinputs);
			// Adjust the swap status
			if (gamestate.swapinputs[0] === null) {
				gamestate.swapinputs[0] = k;
				document.querySelector(`#swap_${k}`).className = "game_button active";
			}
			else if (gamestate.swapinputs[0] === k) {
				gamestate.swapinputs[0] = null;
				document.querySelector(`#swap_${k}`).className = "game_button";
			}
			else {
				// Perform swap
				swap(gamestate.swapinputs[0], k);
				console.log("Swapped elements of position " + gamestate.swapinputs[0] + " and " + k);
				// Update view
				for (var j = 0; j < array.length; j++) {
					document.querySelector(`#index_${j}`).innerHTML = array[j];
				}
				document.querySelector(`#swap_${gamestate.swapinputs[0]}`).className = "game_button";
				gamestate.swapinputs[0] = null;
				// Check if sorted
				if (isSorted(1)) {
					document.querySelector("#gamestate").innerHTML = "Won ASC";
					document.querySelector("#sortstep").removeAttribute("disabled");
				}
				else if (isSorted(-1)) {
					document.querySelector("#gamestate").innerHTML = "Won DESC";
					document.querySelector("#sortstep").removeAttribute("disabled");
				}
				else
					document.querySelector("#gamestate").innerHTML = "Swaps: " + moves;
			}
		}
	}

	/**Perform a swap incrementing moves.
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

	/**Performs a selection sort.
	 */
}

/**Auxiliary function to determine if index is in bounds.
 */
function inbounds(k, array) {
	if (array == null)
		throw 'Array is nonexistant, cannot sort';
	return (k >= 0 && k < array.length);
}

export default SortGameJS;