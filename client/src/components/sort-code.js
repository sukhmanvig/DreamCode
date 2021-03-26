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
						for any pair of indices <var>a, b</var>: the items <var>X[a] &leq; X[b]</var> 
						or <var>X[a] &geq; X[b]</var>.
					</p>
					<h1 className="codesnippet_h1">Sorting algorithms</h1>
					<p>
						Most conventional sorting algorithms are based on <i>swapping</i> items.
						Simple sorting algorithms can take up to <var>n<sup>2</sup></var> time,
						while the best comparison algorithms take <var>n</var> log <var>n</var> time
						on average.
					</p>
					<h2 className="codesnippet_h2">Selection sort</h2>
					<p>
						The outer loop controls which element, in sorted order overall, to examine.
						Thus, the first iteration of the outer loop puts the first element in sorted order
						in its correct position; the second iteration puts the second element in sorted order
						in its correct position, and so on.
						def selection_sort(L):
					</p>
					<p>
						The inner loop searches all <var>n</var> elements and picks which one to swap.
						This algorithm takes inefficient quadratic time without regard to how sorted this list
						is.
					</p>
					<pre className="code_pre">
						<code>{`
def selection_sort(L):
# i indicates how many items were sorted
for i in range(len(L)-1):
	# To find the minimum value of the unsorted segment
	# We first assume that the first element is the lowest
	min_index = i
	# We then use j to loop through the remaining elements
	for j in range(i+1, len(L)-1):
		# Update the min_index if the element at j is lower than it
		if L[j] < L[min_index]:
			min_index = j
	# After finding the lowest item of the unsorted regions, swap with the first unsorted item
	L[i], L[min_index] = L[min_index], L[i]`}
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
					</p>
					<pre className="code_pre">
						<code>{`
def insertion_sort(array):

# We start from 1 since the first element is trivially sorted
for index in range(1, len(array)):
	currentValue = array[index]
	currentPosition = index

	# As long as we haven't reached the beginning and there is an element
	# in our sorted array larger than the one we're trying to insert - move
	# that element to the right
	while currentPosition > 0 and array[currentPosition - 1] > currentValue:
		array[currentPosition] = array[currentPosition -1]
		currentPosition = currentPosition - 1


	# We have either reached the beginning of the array or we have found
	# an element of the sorted array that is smaller than the element
	# we're trying to insert at index currentPosition - 1.
	# Either way - we insert the element at currentPosition
	array[currentPosition] = currentValue`}
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
						For larger arrays, we select some element in the array <var>A</var> as the pivot, <var>A[k]</var>
						where <var>k</var> is the position of the pivot element. We examine all the elements in the
						array or sub-array and partially sort that array by putting all the <var>m</var> elements below
						<var>A[k]</var> on one side and the others on the other side.
					</p>
					<p>
						This algorithm usually takes a much better <var>n</var> log <var>n</var> time to complete.
						Rarely will this algorithm exhibit quadratic complexity, if the pivot is always the largest
						or the smallest element across all recursive calls.
					</p>
					<pre className="code_pre">
						<code>{`
def partition(array, start, end, compare_func):
	pivot = array[start]
	low = start + 1
	high = end

	while True:
		while low <= high and compare_func(array[high], pivot):
			high = high - 1

		while low <= high and not compare_func(array[low], pivot):
			low = low + 1

		if low <= high:
			array[low], array[high] = array[high], array[low]
		else:
			break

	array[start], array[high] = array[high], array[start]

	return high

def quick_sort(array, start, end, compare_func):
	if start >= end:
		return

	p = partition(array, start, end, compare_func)
	quick_sort(array, start, p-1, compare_func)
	quick_sort(array, p+1, end, compare_func)`}
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
						Being a non-comparison sort, it can achieve up to linear time. 
					</p>
					<pre className="code_pre">
						<code>{`
# Method to do Radix Sort
def radixSort(arr):
 
    # Find the maximum number to know number of digits
    max1 = max(arr)
 
    # Do counting sort for every digit. Note that instead
    # of passing digit number, exp is passed. exp is 10^i
    # where i is current digit number
    exp = 1
    while max1 / exp > 0:
        countingSort(arr, exp)
        exp *= 10`}
						</code>
					</pre>
					<Link to="/sort-page">
						<input
							type="submit"
							id="toGameButton"
							name="game"
							value="Play game"
						/>
					</Link>
					Source: StackAbuse
				</div>
			</body>
		</Fragment>
	);
}

export default SortCodeSnippets;
