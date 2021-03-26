(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,s,t){},21:function(e,s,t){},31:function(e,s,t){"use strict";t.r(s);var n=t(1),r=t.n(n),i=t(11),a=t(14),c=t.n(a),o=(t(20),t(21),function(){var e,s=document.getElementsByClassName("icon_accordion"),t=s.length;for(e=0;e<t;e++)s[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}),l=t(0),d=function(){return Object(n.useEffect)((function(){o()})),Object(l.jsxs)("body",{children:[Object(l.jsx)("nav",{className:"topnav",children:Object(l.jsxs)("div",{className:"topnav",children:[Object(l.jsxs)("div",{className:"navbar-dropdown",children:[Object(l.jsx)("a",{children:"Username"}),Object(l.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(l.jsx)("a",{href:"profile.html",children:"Profile"}),Object(l.jsx)("a",{href:"account-settings.html",children:"Account Settings"}),Object(l.jsx)("a",{href:"index.html",children:"Logout"})]})]}),Object(l.jsx)("a",{href:"contact.html",children:"Contact"}),Object(l.jsx)("a",{href:"about.html",children:"About"}),Object(l.jsx)("a",{href:"index.html",children:"Home"}),Object(l.jsx)("a",{href:"dashboard.html",children:"Dashboard"}),Object(l.jsx)("a",{href:"shell.html",children:"Python Shell"}),Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("a",{href:"index.html",children:"DreamCode"})})]})}),Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("h1",{id:"center-page",children:"Python Problem Repository"}),Object(l.jsx)("h2",{children:"Practice python problems and improve your python skills!"}),Object(l.jsx)("p",{id:"italize",children:"First attempt the problem on your own, then click on the problem to see a sample solution!"}),Object(l.jsxs)("div",{className:"icon_accordion",children:[Object(l.jsx)("div",{className:"icon"}),Object(l.jsx)("h5",{children:"Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user. Hint: how does an even / odd number react differently when divided by 2?"})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)("pre",{id:"yourcode",children:'num = input("Enter a number: ") mod = num % 2 if mod &gt 0: print("You picked an odd number.") else: print("You picked an even number.")'})}),Object(l.jsxs)("div",{className:"icon_accordion",children:[Object(l.jsx)("div",{className:"icon"}),Object(l.jsx)("h5",{children:"Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)"})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)("pre",{children:"def reverse(word):\n\t           x = ''\n\t           for i in range(len(word)):\n\t\t              x += word[len(word)-1-i]\n\t                return x\n\n          word = input('give me a word:\n')\n          x = reverse(word)\n          if x == word:\n\t           print('This is a Palindrome')\n          else:\n\t           print('This is NOT a Palindrome')"})}),Object(l.jsxs)("div",{className:"icon_accordion",children:[Object(l.jsx)("div",{className:"icon"}),Object(l.jsx)("h5",{children:"Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function."})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)("pre",{children:"def list_ends(a_list): return [a_list[0], a_list[len(a_list)-1]]"})}),Object(l.jsxs)("div",{className:"icon_accordion",children:[Object(l.jsx)("div",{className:"icon"}),Object(l.jsx)("h5",{children:"Make a two-player Rock-Paper-Scissors game. (Hint: Ask for player plays (using input), compare them, print out a message of congratulations to the winner, and ask if the players want to start a new game)"})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)("pre",{children:'import sys user1 = input("What\'s your name?") user2 = input("And your name?") user1_answer = input("%s, do yo want to choose rock, paper or scissors?" % user1) user2_answer = input("%s, do you want to choose rock, paper or scissors?" % user2) def compare(u1, u2): if u1 == u2: return("It\'s a tie!") elif u1 == \'rock\': if u2 == \'scissors\': return("Rock wins!") else: return("Paper wins!") elif u1 == \'scissors\': if u2 == \'paper\': return("Scissors win!") else: return("Rock wins!") elif u1 == \'paper\': if u2 == \'rock\': return("Paper wins!") else: return("Scissors win!") else: return("Invalid input! You have not entered rock, paper or scissors, try again.") sys.exit() print(compare(user1_answer, user2_answer))'})}),Object(l.jsxs)("div",{className:"icon_accordion",children:[Object(l.jsx)("div",{className:"icon"}),Object(l.jsx)("h5",{children:"Write a program that takes a list and returns a new list that contains all the elements of the first list minus all the duplicates."})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)("pre",{children:"#Using for loop def dedupe_v1(x): y = [] for i in x: if i not in y: y.append(i) return y #Using sets def dedupe_v2(x): return list(set(x)) a = [1,2,3,4,3,2,1] print a print dedupe_v1(a) print dedupe_v2(a)"})}),Object(l.jsx)("script",{src:"js/python-problem-repository-js.js"})]})]})},h=t(2);var j=function(){return Object(l.jsx)(h.a,{exact:!0,path:"/python-problem-repository",children:Object(l.jsx)("div",{children:Object(l.jsx)(d,{})})})};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(j,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.851fe9fc.chunk.js.map