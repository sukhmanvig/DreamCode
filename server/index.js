require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 3001;
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json()); //req.body
app.use(express.static(path.join(__dirname, "build")));

//ROUTES//

//Create a User
app.post("/users", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);

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

//get all users
app.get("/user", authenticateToken, async (req, res) => {
  const getUser = await pool.query("SELECT * FROM users WHERE username = $1", [
    req.user.username,
  ]);
  res.json(getUser.rows);
});
//authenticate token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, loginUser) => {
    if (err) return res.sendStatus(403);
    req.user = loginUser;
    next();
  });
}

//login user
app.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;

    const loginUser = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND email = $2",
      [username, email]
    );
    if (loginUser.rowCount > 0) {
      if (await bcrypt.compare(req.body.password, loginUser.rows[0].password)) {
        //authorized the user
        //create the token for the user
        const accessToken = jwt.sign(
          loginUser.rows[0],
          process.env.ACCESS_TOKEN_SECRET
        );
        res.json({ accessToken: accessToken });
      } else {
        res.json({ message: "Password Incorrect!" });
      }
    } else {
      res.json({ message: "Wrong username/email" });
    }
  } catch (err) {
    console.error(err.message);
  }
});

//wildcard
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
