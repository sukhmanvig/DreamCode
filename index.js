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
    res.json({ message: "Username/email already exists" }); 
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

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
