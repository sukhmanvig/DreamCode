require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 3002;
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json()); //req.body
app.use(express.static(path.join(__dirname, "build")));

//ROUTES//
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

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
