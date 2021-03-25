import '../css/tutorial-lists-style.css'
import React, { Fragment, useEffect } from 'react';
import ChangeFontSize from './changefontsize'
import {Link} from 'react-router-dom'

const TreeTraversalsTutorial = ({title}) => {

    useEffect(() => {
        document.title = "Tree Traversals Tutorial"
        ChangeFontSize();
    }, []);

	return (	
    <main id="treeTravPage">
        <div class="notes">
            <h1>Tree Traversals</h1>
            <div id="fontsizer">
                <ul>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
    
                </ul>
            </div>
            
        <p>Tree traversals are ways to visit each node of a tree data structure exactly once. The 3 common tree traversals are Preorder, Inorder, and Postorder.
        </p>	
        <p>Here is the starter code for a Binary Tree node.
        </p>
        <pre><code>{`class Node:
        
        def __init__(self, data):
    
            self.data = data
            self.right = None
            self.left = None
            
        def insertLeft(n):
            self.left = n
            
        def insertRight(n):
            self.right = n    def preorder(self, root):
        `}
    <span class="comment"># Preorder Traversal (root, left, right)</span>
{`
        def preorder(self, root):
            r = []
            if root:
                r.append(root.data)
                r+= self.preorder(root.left)
                r+= self.preorder(root.right)
            return r

        `}<span class="comment">#Inorder Traversal (left, root, right)</span>
{`
        def inorder(self, root):
            r = []
            if root:
                r+= self.inorder(root.left)
                r.append(root.data)
                r+= self.inorder(root.right)
            return r
        `}<span class="comment">
        # Postorder Traversal (left, right, root)</span>
{`
        def postorder(self, root):
            r = []
            if root:
                r+= self.postorder(root.left)
                r+= self.postorder(root.right)
                r.append(root.data)
            return r
    
    `}</code></pre>
        <p> Let's create a new tree.
        </p>
        <pre id="treeEx"><code>{`root = Node(4)
        
root.insertLeft(Node(2))
root.insertRight(Node(6))
root.left.insertLeft(Node(5))
root.left.insertRight(Node(3))
root.left.right.insertLeft(Node(1))
root.right.insertRight(Node(9))

`}
    <span class="comment">
    # Note that this tree is unbalanced and unsorted.</span></code>
    <img  src="/images/extree.png" alt="Unbalanced unsorted tree"/>
    </pre>
            
        <p> Let's see the results of traversing the tree using each traversal method.
        </p>
        <pre><code>{`print(root.preorder(root))
print(root.inorder(root))
print(root.postorder(root))
<span class="comment">
# Output:</span>
[4, 2, 5, 3, 1, 6, 9]`} <span class="comment"># Preorder</span>
{`
[5, 2, 1, 3, 4, 6, 9]`} <span class="comment"># Inorder</span>
{`
[5, 1, 3, 2, 9, 6, 4]`} <span class="comment"># Postorder</span>
</code></pre>
            
    <div id="gameLink">Tree Traversals Game</div>
           
           </div>
        </main>
		

	)
}
		
export default TreeTraversalsTutorial