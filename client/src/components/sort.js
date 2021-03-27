/**
 */
const SortGameJS = () => {
	var moves = 0;
	var id = null;
	var level = -1;
	var array = null;
	
	// Input state is based on the swap inputs clicked.
	var gamestate = {
		won: false,
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
		document.querySelector("#swapmode").className = "game_button sorthint active";

		// Default to swap mode
		document.querySelector("#swapmode").click();
	});

	/* Sort Step features */
	document.querySelector("#sortstep").addEventListener('click', ()=>{
		console.log(gamestate.autosolve);
		console.log(gamestate.autosolvehint);
		if (gamestate.autosolve === "Selection") {
			// Calculate the next pair of indices to swap elements.
			console.log(gamestate.autosolve);
			var recmin = array[gamestate.autosolvehint[0]];
			var kmin = gamestate.autosolvehint[0];
			var innersteps = 0;
			for (var k = gamestate.autosolvehint[0] + 1; k < array.length; k++) {
				gamestate.autosolvehint[2]++;
				innersteps++;
				console.log(recmin, array[k]);
				if (isNaN(recmin) || array[k] < recmin) {
					recmin = array[k];
					kmin = k;
				}
			}
			gamestate.autosolvehint[1] = kmin;

			// Disable inputs, then highlight the buttons to swap
			document.querySelector("#gamehint").innerHTML = `Swap element #${gamestate.autosolvehint[0]} with #${kmin}. ${gamestate.autosolvehint[2]} steps total. ${innersteps} steps for this outer loop.`;
			disableSwapInput();
			for (var k = 0; k < gamestate.autosolvehint[0]; k++) 
				document.querySelector(`#swap_${k}`).className = "game_button partial";
			document.querySelector(`#swap_${gamestate.autosolvehint[0]}`).className = "game_button hinted";
			document.querySelector(`#swap_${kmin}`).className = "game_button hinted";
			gamestate.autosolve = "Selection2"
		}
		else if (gamestate.autosolve === "Selection2") {
			// Perform updating swap
			clickSwapInput(gamestate.autosolvehint[0])();
			clickSwapInput(gamestate.autosolvehint[1])();
			for (var k = 0; k < array.length; k++) {
				if (k <= gamestate.autosolvehint[0])
					document.querySelector(`#swap_${k}`).className = "game_button partial";
				else
					document.querySelector(`#swap_${k}`).className = "game_button";
			}
			
			if (gamestate.won) {
				document.querySelector("#gamehint").innerHTML += `Swap element #${gamestate.autosolvehint[0]} with #${gamestate.autosolvehint[1]}. Finished with ${gamestate.autosolvehint[2]} steps total.`;
			}

			// Transition to next state
			gamestate.autosolvehint[0]++;
			gamestate.autosolve = "Selection"
		}
		else if (gamestate.autosolve === "Insertion") {
			console.log(gamestate.autosolve);
			var elem = array[gamestate.autosolvehint[0]];
			var bubbles = 0;
			for (var k = gamestate.autosolvehint[0]; k > 0 && elem > array[k-1]; k--) {
				bubbles++;
			}
			for (var k = 0; k < array.length; k++) {
				if (k <= gamestate.autosolvehint[0])
					document.querySelector(`#swap_${k}`).className = "game_button partial";
				else
					document.querySelector(`#swap_${k}`).className = "game_button";
				if (k <= gamestate.autosolvehint[0] && k >= gamestate.autosolvehint[0]-bubbles)
					document.querySelector(`#swap_${k}`).className = "game_button hinted";
			}

			// Disable inputs, then highlight the buttons to swap
			document.querySelector("#gamehint").innerHTML = `${bubbles} bubbles required to move element to position ${gamestate.autosolvehint[0]-bubbles}.`;
			gamestate.autosolve = "Insertion2"
		}
		else if (gamestate.autosolve === "Insertion2") {
			for (var k = gamestate.autosolvehint[0]; k > 0 && array[k] > array[k-1]; k--) {
				gamestate.autosolvehint[1]++;
				// Perform updating swap
				clickSwapInput(k-1)();
				clickSwapInput(k)();
			}
			document.querySelector("#gamehint").innerHTML = `"Inserted" element #${gamestate.autosolvehint[0]} at position #${k}. ${gamestate.autosolvehint[1]} bubbles total.`;
			gamestate.autosolvehint[0]++;
			for (var k = 0; k < array.length; k++) {
				if (k <= gamestate.autosolvehint[0])
					document.querySelector(`#swap_${k}`).className = "game_button partial";
				else
					document.querySelector(`#swap_${k}`).className = "game_button";
			}
			gamestate.autosolve = "Insertion";
		}
		else if (gamestate.autosolve === "Quick") { /* Perform a Quicksort */
			quicksort(array, 0, array.length);
		}
		else if (gamestate.autosolve === "Radix") { /* Perform a Radixsort */
			radixsort_N(array);
		}
		else {
			console.log("OMG");
		}
	});

	document.querySelector("#swapmode").addEventListener('click', ()=>{
		document.querySelector("#sortstep").setAttribute("disabled", "true");
		gamestate.autosolve = null;
		enableSwapInput();

		document.querySelector("#gamehint").innerHTML = "Select two elements to swap.";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#swapmode").className = "game_button sorthint active";
	});

	document.querySelector("#selectionsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		gamestate.autosolve = "Selection";
		gamestate.autosolvehint = [0, 0, 0];
		disableSwapInput();

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
		gamestate.autosolvehint = [0, 0, 0];
		disableSwapInput();
		
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
		gamestate.autosolvehint = [0, 0, []];
		disableSwapInput();
		
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
		gamestate.autosolvehint = [0, 0, []];
		disableSwapInput();
		
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
		if (sc === -1)
			falsecriteria = function(k){return (array[k] > array[k-1])}
		else if (sc === 1)
			falsecriteria = function(k){return (array[k] < array[k-1])}
		else
			throw 'Need to specify -1 for descending and +1 for ascending'
		// Input check
		if (array === null)
			throw 'Array is nonexistant, cannot sort';
		// Perform linear search to see if array is sorted.
		for (var k = 1; k < array.length; k++) {
			if (falsecriteria(k))
				return false;
		}
		return true;
	}

	/**Clears out the swap inputs.
	 */
	function clearSwapInput() {
		gamestate.swapinputs = [null, null];
		for (var k = 0; k < array.length; k++)
			document.querySelector(`#swap_${k}`).className = "game_button";
	}

	/**Disable the swap inputs. Highlighting is allowed.
	 */
	function disableSwapInput() {
		clearSwapInput();
		gamestate.swapinputs = [null, null];
		for (var k = 0; k < array.length; k++)
			document.querySelector(`#swap_${k}`).setAttribute("disabled", "true");
	}

	/**Enable the swap inputs. All highlighting is removed.
	 */
	function enableSwapInput() {
		for (var k = 0; k < array.length; k++) {
			document.querySelector(`#swap_${k}`).className = "game_button";
			document.querySelector(`#swap_${k}`).removeAttribute("disabled");
		}
	}

	function declareVictory(message) {
		document.querySelector("#gamestate").innerHTML = message;
		gamestate.won = message;
		document.querySelector("#sortstep").removeAttribute("disabled");
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].setAttribute("disabled", "true");
		}
	}

	/**Update the input based on swap buttons pressed. This can be done in hint mode as well.
	 * @param {*} k1 The number associated with the swap button
	 */
	function clickSwapInput(k1) {
		return function(){
			var k = k1;
			console.log("State:" + gamestate.swapinputs + " ; " + "Key clicked: " + k);
			// Adjust the swap status
			if (gamestate.swapinputs[0] === null) {
				gamestate.swapinputs[0] = k;
				document.querySelector(`#swap_${k}`).className = "game_button active";
				document.querySelector("#gamehint").innerHTML = "Selecting " + k + " for swapping. Click on same button to undo."
			}
			else if (gamestate.swapinputs[0] === k) {
				gamestate.swapinputs[0] = null;
				document.querySelector(`#swap_${k}`).className = "game_button";
				document.querySelector("#gamehint").innerHTML = "Select two elements to swap."
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
				document.querySelector("#gamehint").innerHTML = "Swapped element #" + gamestate.swapinputs[0] + " and element #" + k + "."
				gamestate.swapinputs[0] = null;
				// Check if sorted
				if (isSorted(1)) {
					declareVictory("Sorted ASC")
				}
				else if (isSorted(-1)) {
					declareVictory("Sorted DESC")
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

	/**Perform a quicksort on a segment of an array
	 * @param {*} array 
	 * @param {*} ini 
	 * @param {*} fin 
	 */
	function quicksort(array, ini, fin) {
		var count = 0;
		if (fin - ini <= 1)
			return 1;
		if (fin - ini <= 2) {
			if (array[fin-1] < array[ini])
				swap(ini, fin-1);
			return
		}

		var pivotindex = Math.trunc((ini+fin)/2); console.log(array);
		var pivotvalue = array[pivotindex];
		swap(ini, pivotindex); 
		var lowercount = 1;

		for (var k = ini+1; k < fin; k++) {
			count++;
			if (array[k] <= pivotvalue) {
				swap(k, ini+lowercount);
				lowercount++; console.log(array);
			}
		}
		// Recursive call
		swap(ini+lowercount-1, ini); console.log(array);
		return count + quicksort(array, ini, ini+lowercount-1) + quicksort(array, ini+lowercount, fin);
	}
		
	/**Perform a quicksort partition.
	 */
	
	/**Perform a radixsort.
	 */
	function radixsort_N(array) {
		var longestrep = 0;
		for (var x in array) {
			if (array[x] > longestrep)
				longestrep = array[x];
		}

		var placevalue = 1;
		while (longestrep != 0) {
			var bucketcount = [];
			for (var k = 0; k < 10; k++) {
				bucketcount[k] = [];
			}

			for (var x in array) {
				bucketcount[Math.trunc(array[x]/placevalue)%10].push(array[x]);
				console.log(bucketcount);
			}

			var nextarray = [];
			for (var k = 0; k < bucketcount.length; k++) {
				for (var x in bucketcount[k]) {
					nextarray.push(bucketcount[k][x]);
					console.log(nextarray);
				}
			}
			array = nextarray;

			longestrep = Math.trunc(longestrep/10);
			placevalue *= 10;
			console.log(array);
		}
	}
}

/**Auxiliary function to determine if index is in bounds.
 */
function inbounds(k, array) {
	if (array === null)
		throw 'Array is nonexistant, cannot sort';
	return (k >= 0 && k < array.length);
}

export default SortGameJS;