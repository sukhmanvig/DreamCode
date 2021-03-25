import  React, {Fragment} from 'react';
import '../css/nav.css';
import '../css/python-learning-resources-styles.css';


const PythonLearningResources = () => {
return (
<Fragment>
  <title>Python Learning Resources</title>
  <body>
    <nav className="topnav">
      <div className="topnav">
        <div className="navbar-dropdown"><a>Username</a>
          <div className="navbar-dropdown-elements">
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
        <div className="logo">
          <a href='index.html'>DreamCode</a>
        </div>
       </div>
    </nav>

  <h1 id="center-page">Python Learning Resources</h1>

  <ul className="main-nav">

    <li className="item1">
        <div className="bg">
          <label className="textOverImage" style={{backgroundImage: url("images/udemy.png")}}></label>
         
          
          <input type="checkbox"></input>
          <h2><a href="https://www.udemy.com/course/complete-python-bootcamp/?LSNPUBID=jU79Zysihs4&siteID=jU79Zysihs4-wy57L5rBsHZNKZ2IjcYiTg" target="_blank">Udemy</a></h2>
          <div>
            Introduction of Python, Python objects and Data structure basics, Python statements
          </div>
        </div>
    </li>


    <li className="item2">
      <div className="bg">
        <label className="textOverImage" style={{backgroundImage: "url(images/codeAcademy.png)"}}/>
        <input type="checkbox"></input>
        <h2><a href="https://www.codecademy.com/learn/learn-python" target="_blank">codeAcademy</a></h2>
        <div>
          Conditionals and control flow, Functions, List and dictionaries, Loops
        </div>
      </div>
    </li>

    <li className="item3">
      <div className="bg">
        <label className="textOverImage" style={{backgroundImage: url("images/tutorialspoint.png")}}/>
        <input type="checkbox"></input>
        <h2><a href="https://www.tutorialspoint.com/python/" target="_blank">Tutorials Point</a></h2>
        <div>
          Basic syntax, Variable types, Basic operators, Decision making
        </div>
      </div>
    </li>

    <li className="item4">
      <div className="bg">
        <label className="textOverImage" style={{backgroundImage: url("images/studytonight.jpg")}}/>
        <input type="checkbox"></input>
        <h2><a href="https://www.studytonight.com/" target="_blank">Studytonight</a></h2>
        <div>
          Modules and functions, Lists, Data types, Conditional statements
        </div>
      </div>
    </li>


    <li className="item5">
      <div className="bg">
        <label className="textOverImage" style={{backgroundImage: url("images/intellipaat.jpg")}}/>
        <input type="checkbox"></input>
        <h2><a href="https://intellipaat.com/blog/tutorial/python-tutorial/" target="_blank">IntelliPaat</a></h2>
        <div>
          Conditional control flow, Modules, Exception handling, Regular expressions
        </div>
      </div>
    </li>
  </ul>

  </body>
  </Fragment>
);
}

export default PythonLearningResources;