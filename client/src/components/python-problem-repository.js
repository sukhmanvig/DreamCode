import  React, {Fragment} from 'react';
import '../css/python-problem-repository-styles.css';
import '../css/nav.css';
import './python-problem-repository-js.js'

const PythonProblemRepository = () => {
    return (
        
  
  <body>

      <nav class="topnav"> 
    		<div class="topnav">
    			<div class="navbar-dropdown"><a>Username</a>
    				<div class="navbar-dropdown-elements">
    						<a href="profile.html">Profile</a>
    						<a href="account-settings.html">Account Settings</a>
    						<a href="index.html">Logout</a>
    				</div>
    			</div>
    			<a href= 'contact.html'>Contact</a>
    			<a href= 'about.html'>About</a>
    			<a href= 'index.html'>Home</a>
    			<a href= 'dashboard.html'>Dashboard</a>
			<a href= 'shell.html'>Python Shell</a>
    			<div class="logo">
    				<a href='index.html'>DreamCode</a>
    			</div>
    		 </div>
    	</nav>

    <div class="container-fluid">
      <h1 id="center-page">Python Problem Repository</h1>
      <h2>Practice python problems and improve your python skills!</h2>
      <p id="italize">First attempt the problem on your own, then click on the problem to see a sample solution!</p>

      
      <div class="icon_accordion">
        <div class="icon"></div>
        <h5>Ask the user for a number. Depending on whether the number is
          even or odd, print out an appropriate message to the user.
          Hint: how does an even / odd number react differently when divided by 2?</h5>
      </div>
      <div class="panel">
        <pre  id="yourcode">
         num = input("Enter a number: ")
         mod = num % 2
         if mod &gt 0:
            print("You picked an odd number.")
         else:
            print("You picked an even number.")
        </pre>
      </div>


      
      <div class="icon_accordion">
        <div class="icon"></div>
        <h5>Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)</h5>
      </div>
      <div class="panel">
        <pre>
          def reverse(word):
	           x = ''
	           for i in range(len(word)):
		              x += word[len(word)-1-i]
	                return x

          word = input('give me a word:\n')
          x = reverse(word)
          if x == word:
	           print('This is a Palindrome')
          else:
	           print('This is NOT a Palindrome')
        </pre>
      </div>


      
      <div class="icon_accordion">
        <div class="icon"></div>
        <h5>Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function.</h5>
      </div>
      <div class="panel">
        <pre>
          def list_ends(a_list):
              return [a_list[0], a_list[len(a_list)-1]]
        </pre>
      </div>

     
      <div class="icon_accordion">
        <div class="icon"></div>
        <h5>Make a two-player Rock-Paper-Scissors game. (Hint: Ask for player plays (using input), compare them, print out a message of congratulations to the winner, and ask if the players want to start a new game)</h5>
      </div>
      <div class="panel">
        <pre>
          import sys

          user1 = input("What's your name?")
          user2 = input("And your name?")
          user1_answer = input("%s, do yo want to choose rock,
                         paper or scissors?" % user1)
          user2_answer = input("%s, do you want to choose rock,
                         paper or scissors?" % user2)

          def compare(u1, u2):
              if u1 == u2:
                  return("It's a tie!")
              elif u1 == 'rock':
                  if u2 == 'scissors':
                      return("Rock wins!")
                  else:
                      return("Paper wins!")
              elif u1 == 'scissors':
                  if u2 == 'paper':
                      return("Scissors win!")
                  else:
                      return("Rock wins!")
              elif u1 == 'paper':
                  if u2 == 'rock':
                      return("Paper wins!")
                  else:
                      return("Scissors win!")
              else:
                  return("Invalid input! You have not entered rock, paper or
                  scissors, try again.")
                  sys.exit()

          print(compare(user1_answer, user2_answer))
        </pre>
      </div>

      
      <div class="icon_accordion">
        <div class="icon"></div>
        <h5>Write a program that takes a list and returns a new list that contains all the elements
          of the first list minus all the duplicates.</h5>
      </div>
      <div class="panel">
        <pre>
          #Using for loop
          def dedupe_v1(x):
            y = []
            for i in x:
              if i not in y:
                y.append(i)
            return y

          #Using sets
          def dedupe_v2(x):
            return list(set(x))

          a = [1,2,3,4,3,2,1]
          print a
          print dedupe_v1(a)
          print dedupe_v2(a)
        </pre>
      </div>

      <script src="js/python-problem-repository-js.js"></script>

      

    </div>
  </body>

    )
}
export default PythonProblemRepository;