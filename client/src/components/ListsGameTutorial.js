import React, { useEffect } from "react";
import ChangeFontSize from "./ChangeFontSize";
import {Link} from 'react-router-dom'
import "../css/lists-tutorial-style.css";

const ListsGameTutorial = () => {
  useEffect(() => {
    document.title = "Python Lists Tutorial";
    ChangeFontSize();
  }, []);

  return (
    <>
      <div className="notes">
        <h1>Python Lists</h1>
        <div id="fontsizer">
          <ul>
            <li>A</li>
            <li>A</li>
            <li>A</li>
          </ul>
        </div>

        <p>
          Lists are one of 4 built-in data structures in Python, used to store a
          collection of items. List items are enclosed in square brackets.
        </p>
        <pre>
          <code>{`fruits = ["apple", "orange", "banana"]

len(fruits)`} <span className="comment"># gives the number of elements in the list, output: 3</span></code>
        </pre>
        <p>
          {" "}
          Items in lists are ordered. You can access list items at a specific
          position in the list using the item's index number. List indices start
          at 0.
        </p>
        <pre>
          <code>{`
print(fruits[0])
print(fruits[1])
print(fruits[2])

`}
<span className="comment"># Output:{`
# apple
# orange
# banana`}</span></code>
        </pre>
        <p>
          Python list elements can be of different data types. Lists can also
          contain duplicate items.
        </p>
        <pre>
          <code>{`list_sample = ["bird", 24, True]`} <span className="comment"># list_sample contains elements of type string, int, and bool.</span>
{`
duplicates = ["hello", "hello", 42, "hello", "test", 42]`}</code>
        </pre>
        <p>Create a new empty list. There are two ways to do this in Python.</p>
        <pre>
          <code>
            {`students = list()
`}<span className="comment"># or</span>
{`
students_2 = []`}
          </code>
        </pre>
        <p>
          Add an item to the 'students' list. Using append adds item to the end
          of the list.{" "}
        </p>
        <pre>
          <code>{`students.append("Laura")
students.append("Charles")
students.append("Brian")

print(students) `}

<span className="comment"># output: ['Laura', 'Charles', 'Brian']</span>
</code>
        </pre>
        <p>Insert an item:</p>
        <pre>
          <code>{`student.insert(0, "Mabel")`} <span className="comment"># Mabel is inserted at position 0</span></code>
        </pre>
        <p>Replace items in the list:</p>
        <pre>
          <code>
            {`students[1] = "Kate" print(students) `}
            <span className="comment">
              # output: ['Mabel', 'Kate', 'Charles', 'Brian']
            </span>
          </code>
        </pre>
        <p>Delete items in list:</p>
        <pre>
          <code>{`students.remove("Kate")`} <span className="comment"># this removes the first occurrence of "Kate"</span>
{`

student.pop(2)`} <span className="comment"># remove and return the item at index 2 (the third item in the list)</span>
{`
`}

<span className="comment">no index provided removes the item at the end of the list</span>
{`

print(students) `}<span className="comment"># output: ['Mabel', 'Charles']</span></code>
        </pre>

        <Link to="/listsgame"><div id="gameLink">Python Lists Game</div></Link>
      </div>
    </>
  );
};
export default ListsGameTutorial;
