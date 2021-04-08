import Axios from "axios";
/**
 */
const SortGameJS = () => {
	var moves = 0;
	var array = null;
	
	// Input state is based on the swap inputs clicked.
	var gamestate = {
		won: false,
		hintsteps: 0,
		swapinputs: [null, null],
		autosolve: null,
		autosolvehint: [-1, null]
	};
	
	/** Add the on-click listeners */
	document.querySelector("#init-array").addEventListener('click', ()=>{
		// If won reset
		if (gamestate.won)
			postToLeaderboard(calculatescore());
		gamestate.won = false;

		// Perform array initialization
		var entries = parseInt(document.querySelector("#init-array-entries").value);
		if (isNaN(entries))
			entries=12;
		var rangemax = parseInt(document.querySelector("#init-array-rangemax").value);
		if (isNaN(entries))
			entries=12;
		console.log("Created array of size " + entries + " with values from 0 to " + rangemax);
		initRandom(entries,0,rangemax); // This function generates the array.

		// Put array and array buttons to front end
		document.querySelector("#gamestage").innerHTML = "";
		var swaplisteners = [];
		var tablehtml = "";
		tablehtml += "<table>";
		// Show numbers
		tablehtml += "<tr>";
		var k;
		for (k = 0; k < array.length; k++) {
			tablehtml += `<td id=index_${k}>` + array[k] + "</td>";
		}
		tablehtml += "</tr>";
		// Add buttons
		tablehtml += "<tr>";
		for (k = 0; k < array.length; k++) {
			tablehtml += `<td><button id=swap_${k} class="game_button">Swap #${k}</button></td>`;
			swaplisteners[k] = clickSwapInput(k);
		}
		tablehtml += "</tr>";
		tablehtml += "</table>";
		document.querySelector("#gamestage").innerHTML = tablehtml;
		// Add button functionalities
		for (k = 0; k < array.length; k++) {
			document.querySelector(`#swap_${k}`).addEventListener('click', 
				swaplisteners[k]
			);
		}
		// Enable hints
		var elems = document.getElementsByClassName("sorthint");
		for (k = 0; k < elems.length; k++) {
			elems[k].removeAttribute("disabled");
		}
		document.querySelector("#sortstep").setAttribute("disabled", "true");
		document.querySelector("#swapmode").className = "game_button sorthint active";

		// Default to swap mode
		document.querySelector("#swapmode").click();

		// Update display
		update_statdisplay();
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
			var k;
			for (k = gamestate.autosolvehint[0] + 1; k < array.length; k++) {
				gamestate.autosolvehint[2]++;
				innersteps++;
				console.log(recmin, array[k]);
				if (isNaN(recmin) || array[k] < recmin) {
					recmin = array[k];
					kmin = k;
				}
			}
			gamestate.autosolvehint[1] = kmin;
			gamestate.hintsteps += innersteps;

			// Disable inputs, then highlight the buttons to swap
			document.querySelector("#gamehint").innerHTML = `Swap element #${gamestate.autosolvehint[0]} with #${kmin}. ${gamestate.autosolvehint[2]} steps total. ${innersteps} steps for this outer loop.`;
			disableSwapInput();
			for (k = 0; k < gamestate.autosolvehint[0]; k++) 
				document.querySelector(`#swap_${k}`).className = "game_button partial";
			document.querySelector(`#swap_${gamestate.autosolvehint[0]}`).className = "game_button hinted";
			document.querySelector(`#swap_${kmin}`).className = "game_button hinted";
			gamestate.autosolve = "Selection2"
		}
		else if (gamestate.autosolve === "Selection2") {
			// Perform updating swap
			clickSwapInput(gamestate.autosolvehint[0])();
			clickSwapInput(gamestate.autosolvehint[1])();
			for (k = 0; k < array.length; k++) {
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
			for (k = gamestate.autosolvehint[0]; k > 0 && elem > array[k-1]; k--) {
				bubbles++;
			}
			for (k = 0; k < array.length; k++) {
				if (k <= gamestate.autosolvehint[0])
					document.querySelector(`#swap_${k}`).className = "game_button partial";
				else
					document.querySelector(`#swap_${k}`).className = "game_button";
				if (k <= gamestate.autosolvehint[0] && k >= gamestate.autosolvehint[0]-bubbles)
					document.querySelector(`#swap_${k}`).className = "game_button hinted";
			}
			gamestate.hintsteps += bubbles;

			// Disable inputs, then highlight the buttons to swap
			document.querySelector("#gamehint").innerHTML = `${bubbles} bubbles required to move element to position ${gamestate.autosolvehint[0]-bubbles}.`;
			gamestate.autosolve = "Insertion2"
		}
		else if (gamestate.autosolve === "Insertion2") {
			for (k = gamestate.autosolvehint[0]; k > 0 && array[k] > array[k-1]; k--) {
				gamestate.autosolvehint[1]++;
				// Perform updating swap
				clickSwapInput(k-1)();
				clickSwapInput(k)();
			}
			document.querySelector("#gamehint").innerHTML = `"Inserted" element #${gamestate.autosolvehint[0]} at position #${k}. ${gamestate.autosolvehint[1]} bubbles total.`;
			gamestate.autosolvehint[0]++;
			for (k = 0; k < array.length; k++) {
				if (k <= gamestate.autosolvehint[0])
					document.querySelector(`#swap_${k}`).className = "game_button partial";
				else
					document.querySelector(`#swap_${k}`).className = "game_button";
			}
			gamestate.autosolve = "Insertion";
		}
		else if (gamestate.autosolve === "Quick") { /* Perform a Quicksort */
			var ini = gamestate.autosolvehint[0][0]; var fin = gamestate.autosolvehint[0][1];
			if (fin - ini <= 2) {
				// Base case
				if (fin - ini > 1) {
					if (array[fin-1] < array[ini]) {
						clickSwapInput(ini)();clickSwapInput(fin-1)();
					}
					else {
						gamestate.autosolvehint[5].push(ini);
						gamestate.autosolvehint[5].push(fin-1);
					}
				}
				for (k = 0; k < array.length; k++) {
					if (k >= ini && k < fin)
						document.querySelector(`#swap_${k}`).className = "game_button hinted";
					else
						document.querySelector(`#swap_${k}`).className = "game_button offscope";
				}
				gamestate.autosolvehint[0] = gamestate.autosolvehint[4].pop();
				document.querySelector("#gamehint").innerHTML = `Base case with ${gamestate.autosolvehint[4].length} calls remaining. Starting Quick Sort from [${gamestate.autosolvehint[0][0]},${gamestate.autosolvehint[0][1]}].`;
			}
			else {
				var pivotindex = Math.trunc((ini+fin)/2);
				var pivotvalue = array[pivotindex];
				clickSwapInput(ini)();clickSwapInput(pivotindex)();
				var lowercount = 1;
	
				gamestate.autosolvehint[1] = pivotindex;
				gamestate.autosolvehint[2] = pivotvalue;
				gamestate.autosolvehint[3] = lowercount;
	
				// Update display
				document.querySelector("#gamehint").innerHTML = `Pivot phase: Perform Pivot on ${pivotvalue} from #${pivotindex}`;
				for (k = 0; k < array.length; k++) {
					if (k >= ini && k < fin)
						document.querySelector(`#swap_${k}`).className = "game_button";
					else
						document.querySelector(`#swap_${k}`).className = "game_button offscope";
				}
				document.querySelector(`#swap_${ini}`).className = "game_button hinted";
				document.querySelector(`#swap_${pivotindex}`).className = "game_button hinted";
				gamestate.autosolve = "QuickPivot";
			}
			for (k in gamestate.autosolvehint[5]) {
				document.querySelector(`#swap_${gamestate.autosolvehint[5][k]}`).className = "game_button partial";
			}
		}
		else if (gamestate.autosolve === "QuickPivot") { /* Perform a Quicksort */
			ini = gamestate.autosolvehint[0][0]; fin = gamestate.autosolvehint[0][1];
			pivotvalue = gamestate.autosolvehint[2];
			lowercount = gamestate.autosolvehint[3];
			// Partition phase
			var count = 0;
			for (k = ini+1; k < fin; k++) {
				count++;
				if (array[k] <= pivotvalue) {
					clickSwapInput(k)();clickSwapInput(ini+lowercount)();
					lowercount++;
				}
			}
			gamestate.autosolvehint[3] = lowercount;
			gamestate.hintsteps += count;

			// Update display
			document.querySelector("#gamehint").innerHTML = `Partition Phase: Performed partitions. There are ${lowercount} within ${pivotvalue}, the pivot value.`;
			gamestate.autosolve = "QuickPartition";
			for (k = 0; k < array.length; k++) {
				console.log(ini + " " + k + " " + fin);
				if (k >= ini && k < fin) {
					if (array[k] <= pivotvalue)
						document.querySelector(`#swap_${k}`).className = "game_button hinted";
					else
						document.querySelector(`#swap_${k}`).className = "game_button";
				}
				else
					document.querySelector(`#swap_${k}`).className = "game_button offscope";
			}
			for (k in gamestate.autosolvehint[5]) {
				document.querySelector(`#swap_${gamestate.autosolvehint[5][k]}`).className = "game_button partial";
			}
		}
		else if (gamestate.autosolve === "QuickPartition") { /* Perform a Quicksort */
			ini = gamestate.autosolvehint[0][0]; fin = gamestate.autosolvehint[0][1];
			pivotvalue = gamestate.autosolvehint[2];
			lowercount = gamestate.autosolvehint[3];
			// The pivot, now at position indexed one before ini+lowercount, is known to be in correct position.
			clickSwapInput(ini+lowercount-1)();clickSwapInput(ini)();
			gamestate.autosolvehint[5].push(ini+lowercount-1);

			// Update display
			document.querySelector("#gamehint").innerHTML = `Indexing Phase: Declared partitions. There are ${lowercount} within ${pivotvalue}, the pivot value.`;
			gamestate.autosolve = "QuickRecursive"
			for (k = 0; k < array.length; k++) {
				if (k >= ini && k < fin) {
					if (k < ini+lowercount-1)
						document.querySelector(`#swap_${k}`).className = "game_button hinted";
					else if (k === ini+lowercount-1)
						document.querySelector(`#swap_${k}`).className = "game_button partial";
					else
						document.querySelector(`#swap_${k}`).className = "game_button";
				}
				else
					document.querySelector(`#swap_${k}`).className = "game_button offscope";
			}
			for (k in gamestate.autosolvehint[5]) {
				document.querySelector(`#swap_${gamestate.autosolvehint[5][k]}`).className = "game_button partial";
			}
		}
		else if (gamestate.autosolve === "QuickRecursive") { /* Perform a Quicksort */
			ini = gamestate.autosolvehint[0][0]; fin = gamestate.autosolvehint[0][1];
			lowercount = gamestate.autosolvehint[3];
			gamestate.autosolvehint[4].push([ini+lowercount, fin]);
			gamestate.autosolvehint[4].push([ini, ini+lowercount-1]);
			console.log(gamestate.autosolvehint[4]);

			// Update display
			gamestate.autosolve = "Quick";
			gamestate.autosolvehint[0] = gamestate.autosolvehint[4].pop();
			document.querySelector("#gamehint").innerHTML = `Recursive Calls: ${gamestate.autosolvehint[4].length} calls remaining. Starting Quick Sort from [${gamestate.autosolvehint[0][0]},${gamestate.autosolvehint[0][1]}].`;
			for (k = 0; k < array.length; k++) {
				if (k >= gamestate.autosolvehint[0][0] && k < gamestate.autosolvehint[0][1])
					document.querySelector(`#swap_${k}`).className = "game_button hinted";
				else
					document.querySelector(`#swap_${k}`).className = "game_button offscope";
			}
			for (k in gamestate.autosolvehint[5]) {
				document.querySelector(`#swap_${gamestate.autosolvehint[5][k]}`).className = "game_button partial";
			}
		}
		else if (gamestate.autosolve === "Radix") { /* Perform a Radixsort */
			count = 0;
			var bucketcount = [];
			for (k = 0; k < 10; k++) {
				bucketcount[k] = [];
			}

			for (var x in array) {
				bucketcount[Math.trunc(array[x]/gamestate.autosolvehint[1])%10].push(array[x]);
				count++;
				moves++;
			}

			var nextarray = [];
			for (k = 0; k < bucketcount.length; k++) {
				for (x in bucketcount[k]) {
					nextarray.push(bucketcount[k][x]);
					count++;
					moves++;
				}
			}
			gamestate.autosolvehint[2] = nextarray;
			gamestate.autosolvehint[3] = count;
			gamestate.hintsteps += count;

			document.querySelector("#gamehint").innerHTML = "The distribution of digits in the place value " + gamestate.autosolvehint[1] + " is: [";
			for (k = 0; k < bucketcount.length; k++) {
				document.querySelector("#gamehint").innerHTML += bucketcount[k].length + " ";
			}
			document.querySelector("#gamehint").innerHTML += "]";
			gamestate.autosolve = "Radix2";
		}
		else if (gamestate.autosolve === "Radix2") { /* Perform a Radixsort */
			// Update array in place and view. The loop is required only as an artifact.
			for (x in array)
				array[x] = gamestate.autosolvehint[2][x]; 
			redisplay_array();
			document.querySelector("#gamehint").innerHTML = "Performed " + gamestate.autosolvehint[3] + " transfers from bucket to array with " + moves + " transfers total.";

			gamestate.autosolvehint[0] = Math.trunc(gamestate.autosolvehint[0]/10);
			gamestate.autosolvehint[1] *= 10;
			gamestate.autosolve = "Radix";
		}
		else {
			console.log("OMG");
		}
		update_statdisplay()
	});

	document.querySelector("#fastforward").addEventListener('click', ()=>{
		if (gamestate.autosolve === "Quick") { /* Perform a Quicksort */
			quicksort(array, 0, array.length);
		}
		else if (gamestate.autosolve === "Radix") { /* Perform a Radixsort */
			radixsort_N(array);
		}
		update_statdisplay()
	});

	document.querySelector("#swapmode").addEventListener('click', ()=>{
		document.querySelector("#sortstep").setAttribute("disabled", "true");
		document.querySelector("#fastforward").setAttribute("disabled", "true");
		gamestate.autosolve = null;
		enableSwapInput();

		document.querySelector("#gamehint").innerHTML = "Select two elements to swap.";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#swapmode").className = "game_button sorthint active";
		update_statdisplay()
	});

	document.querySelector("#selectionsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		document.querySelector("#fastforward").setAttribute("disabled", "true");
		gamestate.autosolve = "Selection";
		gamestate.autosolvehint = [0, 0, 0];
		disableSwapInput();

		document.querySelector("#gamehint").innerHTML = "Starting Selection Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#selectionsort").className = "game_button sorthint active";
		update_statdisplay()
	});

	document.querySelector("#insertionsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		document.querySelector("#fastforward").setAttribute("disabled", "true");
		gamestate.autosolve = "Insertion";
		gamestate.autosolvehint = [0, 0, 0];
		disableSwapInput();
		
		document.querySelector("#gamehint").innerHTML = "Starting Insertion Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#insertionsort").className = "game_button sorthint active";
		update_statdisplay()
	});

	document.querySelector("#quicksort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		document.querySelector("#fastforward").removeAttribute("disabled");
		gamestate.autosolve = "Quick";
		gamestate.autosolvehint = [[0,array.length],NaN,NaN,NaN,[],[]];
		disableSwapInput();
		
		document.querySelector("#gamehint").innerHTML = `Starting Quick Sort from [${gamestate.autosolvehint[0][0]},${gamestate.autosolvehint[0][1]}] `;
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#quicksort").className = "game_button sorthint active";
		update_statdisplay()
	});

	document.querySelector("#radixsort").addEventListener('click', ()=>{
		document.querySelector("#sortstep").removeAttribute("disabled");
		document.querySelector("#fastforward").removeAttribute("disabled");
		gamestate.autosolve = "Radix";
		var longestrep = 0;
		for (var x in array) {
			if (array[x] > longestrep)
				longestrep = array[x];
		}
		gamestate.autosolvehint = [longestrep, 1, []];
		disableSwapInput();
		
		document.querySelector("#gamehint").innerHTML = "Starting Radix Sort";
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].className = "game_button sorthint";
		}
		document.querySelector("#radixsort").className = "game_button sorthint active";
		update_statdisplay()
	});

	/**Initialize the game with a random array.
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
		gamestate.hintsteps = 0;

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
			throw new Error('Need to specify -1 for descending and +1 for ascending');
		// Input check
		if (array === null)
			throw new Error('Array is nonexistent, cannot sort');
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

	/**Declare victory, updating the view and disabling the swap and hint buttons.
	 * @param {*} message 
	 */
	function declareVictory(message) {
		document.querySelector("#gamestate").innerHTML = message + " in " + moves + " swaps.";
		gamestate.won = message;
		document.querySelector("#sortstep").removeAttribute("disabled");
		var elems = document.getElementsByClassName("sorthint");
		for (var k = 0; k < elems.length; k++) {
			elems[k].setAttribute("disabled", "true");
		}
	}

	/**Post to the leaderboard.
	 * @param {*} score 
	 */
	function postToLeaderboard(score) {
		Axios.post("/leaderboard", {
			uid: localStorage.getItem("users_id"),
			thisscore: score
		}).then((response) => {
			if (response.data.message) {
				console.error(response.data.message);
			} else {
				console.log(`User #${localStorage.getItem("users_id")} earned ${score} points. `);
			}
		});
	}

	/**Update the input based on swap buttons pressed. This can be done in hint mode as well.
	 * @param {*} k1 The number associated with the swap button
	 */
	function clickSwapInput(k1) {
		return function(){
			var k = k1;
			console.log("State:" + gamestate.swapinputs + " ; Key clicked: " + k);
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
			}
			// Check if sorted
			if (isSorted(1)) {
				declareVictory("Sorted ASC")
			}
			else if (isSorted(-1)) {
				declareVictory("Sorted DESC")
			}
			else {
				document.querySelector("#gamestate").innerHTML = "Swaps: " + moves;
			}
			// Update display
			update_statdisplay();
		}
	}

	/**Perform a swap incrementing moves.
	 * @param {*} k1 
	 * @param {*} k2 
	 */
	function swap(k1, k2) {
		if (!inbounds(k1, array) || !inbounds(k2, array))
			throw new Error('One of the indices are out of bounds');
		// Perform swap
		var temp = array[k1];
		array[k1] = array[k2];
		array[k2] = temp;
		// Increment moves
		moves++;
	}

	function redisplay_array() {
		console.log(array);
		for (var k = 0; k < array.length; k++) {
			document.querySelector(`#index_${k}`).innerHTML = array[k];
		}

		// Check if sorted
		if (isSorted(1)) {
			declareVictory("Sorted ASC")
		}
		else if (isSorted(-1)) {
			declareVictory("Sorted DESC")
		}
		else {
			document.querySelector("#gamestate").innerHTML = "Swaps: " + moves;
		}
	}

	/**Perform a quicksort on a segment of an array
	 * @param {*} array 
	 * @param {*} ini 
	 * @param {*} fin 
	 */
	function quicksort(array, ini, fin) {
		var count = 0;
		// Base case
		if (fin - ini <= 1)
			return 1;
		if (fin - ini <= 2) {
			if (array[fin-1] < array[ini]) {
				clickSwapInput(ini)();clickSwapInput(fin-1)();
			}
			return
		}

		// Pivot phase
		var pivotindex = Math.trunc((ini+fin)/2);
		var pivotvalue = array[pivotindex];
		clickSwapInput(ini)();clickSwapInput(pivotindex)();
		var lowercount = 1;

		// Partition phase
		for (var k = ini+1; k < fin; k++) {
			count++;
			if (array[k] <= pivotvalue) {
				clickSwapInput(k)();clickSwapInput(ini+lowercount)();
				lowercount++;
			}
		}
		// Recursive call
		gamestate.hintsteps += count;
		clickSwapInput(ini+lowercount-1)();clickSwapInput(ini)();
		return count + quicksort(array, ini, ini+lowercount-1) + quicksort(array, ini+lowercount, fin);
	}
	
	/**Perform a radixsort.
	 */
	function radixsort_N(array) {
		var longestrep = 0;
		for (var x in array) {
			if (array[x] > longestrep)
				longestrep = array[x];
		}

		var placevalue = 1;
		while (longestrep !== 0) {
			var count = 0;
			var bucketcount = [];
			for (var k = 0; k < 10; k++) {
				bucketcount[k] = [];
			}

			for (x in array) {
				bucketcount[Math.trunc(array[x]/placevalue)%10].push(array[x]);
				count++;
				moves++;
			}

			var nextarray = [];
			for (k = 0; k < bucketcount.length; k++) {
				for (x in bucketcount[k]) {
					nextarray.push(bucketcount[k][x]);
					count++;
					moves++;
				}
			}

			gamestate.hintsteps += count;

			// Update array in place and view. The loop is required only as an artifact.
			for (x in array)
				array[x] = nextarray[x]; 
			redisplay_array();
			document.querySelector("#gamehint").innerHTML = "Performed " + count + " transfers from bucket to array";

			longestrep = Math.trunc(longestrep/10);
			placevalue *= 10;
		}
	}

	/**Determine score
	 */
	function calculatescore() {
		return array.length*array.length - moves - gamestate.hintsteps;
	}

	/**Update the display
	 */
	function update_statdisplay() {
		document.querySelector("#statswaps").innerHTML = moves;
		document.querySelector("#stathintsteps").innerHTML = gamestate.hintsteps;
		document.querySelector("#statscore").innerHTML = calculatescore();
		document.querySelector("#statwinstate").innerHTML = gamestate.won;
	}
}

/**Auxiliary function to determine if index is in bounds.
 */
function inbounds(k, array) {
  if (array === null) throw new Error("Array is nonexistent, cannot sort");
  return k >= 0 && k < array.length;
}

export default SortGameJS;
