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
					<div className="notes">
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
					</p>
					<p>
						The inner loop searches all <var>n</var> elements and picks which one to swap.
						This algorithm takes inefficient quadratic time without regard to how sorted this list
						is.
					</p>
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