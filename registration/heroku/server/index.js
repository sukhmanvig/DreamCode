const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 3001;
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json()); //req.body
app.use(express.static(path.join(__dirname , "build")));

//ROUTES//



//Create a User

app.post("/users", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES($1, $2, $3)",
      [username, email, password]
    );
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

//login user
app.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    const loginUser = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND email = $2 AND password = $3",
      [username, email, password]
    );
    if (loginUser.rowCount > 0) {
      res.json(loginUser.rows);
    } else {
      res.json({ message: "Wrong username/password" });
    }
  } catch (err) {
    console.error(err.message);
  }
});


//wildcard
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const db = mysql.createConnection({
  /*user: "riolosrzjbhdxa",
    host: "ec2-54-198-73-79.compute-1.amazonaws.com",
    password: "b37ac7ad7e6047f9c7a5fa1f8bb200761989d11c934c1ac0716907e34ed71efd",
    database: "d5ojq5fg16io3j"*/

  user: "root",
  host: "localhost",
  password: "password",
  database: "LoginSystem",
});

/*db.connect(err => {
    if (!err) {
        console.log("DB Connection Succeeded");
    } else {
        console.log(err);
    }
});*/
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
