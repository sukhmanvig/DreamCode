import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/codesnippet-style.css";
import "../css/nav.css";
import ChangeFontSize from "./changefontsize.js";

/**
 */

// Returns a SortGameJS object. 
const SortCodeSnippets = () => {
	useEffect(() => {
		ChangeFontSize();
	}, []);

	/* Return HTML representation of this code snippet */
	return (
		<Fragment>
			<title>Learn Sorting</title>
			<body id="codesnippet_body">
				<div id="content">
					<h1 className="codesnippet_h1">Sorting</h1>
					<div className="sortNotes">
						<div id="fontsizer">
							<ul>
								<li>A</li>
								<li>A</li>
								<li>A</li>
							</ul>
						</div>
					</div>
					<p>
						Given an array or datastructure of numbers, objects, or Comparable items,
						sorting the array or datastructure means that we rearrange the items such that
						for any pair of indices <var>a</var>, <var>b</var>: the items <var>X</var>[<var>a</var>] &leq; <var>X</var>[<var>b</var>]
						or <var>X</var>[<var>a</var>] &geq; <var>X</var>[<var>b</var>].
					</p>
					<h1 className="codesnippet_h1">Sorting algorithms</h1>
					<p>
						Most conventional sorting algorithms are based on <i>swapping</i> items.
						Simple sorting algorithms can take up to <var>n</var><sup>2</sup> time,
						while the best comparison algorithms take <var>n</var> log <var>n</var> time
						on average.
					</p>
					<h2 className="codesnippet_h2">Selection sort</h2>
					<p>
						The outer loop controls which element, in sorted order overall, to examine.
						Thus, the first iteration of the outer loop puts the first element in sorted order
						in its correct position; the second iteration puts the second element in sorted order
						in its correct position, and so on.
					</p>
					<p>
						The inner loop searches all <var>n</var> elements and picks which one to swap.
						It starts at one place after the current value of the outer loop counter.
						This algorithm takes inefficient quadratic time without regard to how sorted this list
						is.
					</p>
					<p>
						The selection sort takes eight Python lines and two layers of loops to implement.
						This function takes in an <code>array</code> as a list and modifies it inside the function.

						Let <code>position</code> and <code>index</code> represent the index of the outer and
						inner loop.
					</p>
					<pre className="codesnippet_pre">
						<code>{`
def selectionsort(array: list):
	# The outer loop indicates the overall number of items in sorted order.
	for position in range(len(array)):
		minswap = array[position]
		swapindex = position
		# The inner loop checks which index after the outer loop index to swap.
		for index in range(position + 1, len(array)):
			if minswap == None or array[index] < minswap:
				minswap = array[index]
				swapindex = index
		# Perform swap
		array[position], array[swapindex] = array[swapindex], array[position]
	# End of algorithm
`}
						</code>
					</pre>
					<h2 className="codesnippet_h2">Insertion sort</h2>
					<p>
						The outer loop controls which element, in sorted order overall, to examine.
					</p>
					<p>
						The inner loop bubbles this element to earlier indices until the sub-list from index 0
						to the element's next index is sorted. At the time the inner loop ends, and this element
						is at position <var>k</var>, all the elements from position 0 to <var>k</var> are sorted.
						This algorithm takes quadratic time on average, but works almost linear time for nearly
						sorted and small arrays.

						Let <code>array</code> represent the array and <code>position</code> represent the current
						position of the item to be inserted into the sorted partition.
					</p>
					<p>
						The insertion sort takes six Python lines and an outer foreach-loop and an inner for-loop
						which needs to be implemented as a while-loop in Python.

						The overall complexity depends on the number of bubble-downs. This is done by repeatedly
						swapping the target item to the correct spot given that the first few elements should be
						in sorted order.
					</p>
					<pre className="codesnippet_pre">
						<code>{`
def insertionsort(array: list):
	# The outer loop indicates the overall number of items in the sorted region.
	# The sorted region is from index 0 to the outer loop position.
	for position in range(1, len(array)):
		# The inner loop bubbles the next element, which is off the sorted order
		# into the correct spot in the sorted region.
		index = position
		while index > 0 and array[index] < array[index-1]: # Bubble down
			array[index], array[index-1] = array[index-1], array[index]
			index -= 1
	# End of algorithm
`}
						</code>
					</pre>
					<h2 className="codesnippet_h2">Quick sort</h2>
					<p>
						This is a recursive sort algorithm, which divides the array into two partitions based on
						the sample element selected, called the pivot.
					</p>
					<p>
						On the base case, with zero, one, or two elements, we check if this small list is sorted,
						and if not we just use a swap. We can also treat small partitions as base cases in which
						we perform insertion sort instead.
					</p>
					<p>
						For larger arrays, we select some element in the array <var>A</var> as the pivot, <var>A</var>[<var>k</var>]
						where <var>k</var> is the position of the pivot element. We examine all the elements in the
						array or sub-array and partially sort that array by putting all the <var>m</var> elements below
						<var>A</var>[<var>k</var>] on one side and the others on the other side.
					</p>
					<p>
						This algorithm usually takes a much better <var>n</var> log <var>n</var> time to complete.
						Rarely will this algorithm exhibit quadratic complexity, if the pivot is always the largest
						or the smallest element across all recursive calls.
					</p>
					<p>
						Being a recursive algorithm, we can use recursion or implement an auxiliary data structure to
						implement a smaller instance of a quicksort only sorting a segment of the array. An implementation
						with an eleven-line recursive part is featured.
					</p>
					<pre className="codesnippet_pre">
						<code>{`
def quicksort(array: list, ini = 0, fin = None):
	# Base case: Stop for zero-length segments and perform insertion sort for
	# small segments. A few input checks are used.
	if fin == None:
		fin = len(array)
	if fin - ini <= 1:
		return
	if fin - ini <= 2:
		if array[fin-1] < array[ini]:
			array[ini], array[fin-1] = array[fin-1], array[ini]
		return

	# Recursive case: partition, arrange into halves, quicksort the halves
	# Perform arrangement, tracking size of first partition.
	# The pivot is on the first partition. lowercount is the number of elements
	# known to be on the on first partition. Stash pivot to first index ini.
	pivotindex = (ini+fin)//2 # Midpoint is a candid arrangement position
	pivotvalue = array[pivotindex]
	array[ini], array[pivotindex] = array[pivotindex], array[ini]
	lowercount = 1
	# The lowercount is also the index of next candidate first-partition element.
	# After rearranging, the first partition elements are from ini to ini+lowercount-1,
	# in the same relative order to the unsorted stage.
	for k in range(ini+1, fin):
		# Place element on first partition to the next available spot on the first partition.
		if array[k] <= pivotvalue:
			array[k], array[ini+lowercount] = array[ini+lowercount], array[k]
			lowercount += 1
	# Recursively quicksort the two partitions. Pivot is at index ini+lowercount-1.
	array[ini+lowercount-1], array[ini] = array[ini], array[ini+lowercount-1]
	quicksort(array, ini, ini+lowercount-1) # First partition
	quicksort(array, ini+lowercount, fin)   # Second partition
	return
`}
						</code>
					</pre>
					<h2 className="codesnippet_h2">Radix sort</h2>
					<p>
						This is a noncomparison sort, and can only work if the elements are representable as finite strings,
						such as names and integers. We then place the elements in "buckets" to partially sort them based
						on the n-th character of digit. 
						We first sort the numbers by the smallest digit, then perform again until we finally sorted 
						the numbers by the largest digit.
					</p>
					<p>
						Being a non-comparison sort, it can achieve up to linear time. However, it requires extra memory
						to store the buckets, and it is not flexible, as simple implementations may only work for natural
						numbers or strings. It is also well suited if the range of numbers [and thus the number of digits to examine]
						is small.
					</p>
					<pre className="codesnippet_pre">
						<code>{`
def radixsort_nat(array: list):
	# Count the longest element
	longestrep = 0
	for x in array:
		if x > longestrep:
			longestrep = x

	# Place numbers in buckets
	placevalue = 1
	while longestrep != 0:
		# Count the frequency of that digit given place value.
		# We end up with a ragged list.
		bucketcount = [None]*10
		for k in range(len(bucketcount)):
			bucketcount[k] = []
		for x in array:
			bucketcount[x//placevalue%10].append(x)

		print("Place value {0:d}\n\t{1:s}".format(placevalue, repr(bucketcount)))

		# Fill in array with the smallest place values in sorted order
		nextarray = []
		for k in range(len(bucketcount)):
			for x in bucketcount[k]:
				nextarray.append(x)
		array = nextarray
		print(array)

		# Move on to next larger digit
		longestrep //= 10
		placevalue *= 10

	return array
`}
						</code>
					</pre>
					<h2 className="codesnippet_h2">Stable sorts</h2>
					<p>
						A sort is stable if after sorting, the relative order of the elements that are "equal" in value during
						the sorting process is preserved. Consider sorting <code>[(0,A),(1,A),(0,B)]</code> by the first input.
						There are two elements which are equal in value during the sort, but in order they are <code>(0,A),(0,B)</code>.
						Thus, after the sort, a stable sort always yields <code>[(0,A),(0,B),(1,A)]</code> while an unstable sort
						can scramble the relative order, yielding <code>[(0,B),(0,A),(1,B)]</code>.
					</p>
					<p>
						The selection sort and quick sort are not always stable sorts, as a subtle change in implementation is required
						to convert to a stable sort. The insertion sort and radix sorts are always stable regardless of implementation.
					</p>
					<p>
						If you want to implement multi-level sorting, it must be done using a sequence of stable sorts, with the highest
						priority sorting done last.
					</p>
					<Link to="/sort-page">
						<input
							type="submit"
							id="toGameButton"
							name="game"
							value="Play game"
						/>
					</Link>
				</div>
			</body>
		</Fragment>
	);
}

export default SortCodeSnippets;
