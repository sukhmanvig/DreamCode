require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 3001;
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const DailyQuestions = require('./DailyQuestions.json');

const app = express();

app.use(cors());
app.use(express.json()); //req.body
app.use(express.static(path.join(__dirname, "build")));

//keeps track of daily question number
var question_number = 5;
//changes daily question number
function ChangeQuestion() {
  question_number = Math.ceil(Math.random() * 5);
}
//calls changequestion function every day 
setInterval(ChangeQuestion, 86400000);

//move these to the database eventually
let refreshTokens = [];

//ROUTES//

//Create a User
app.post("/users", async (req, res) => {
  try {
    if (req.body.password === req.body.password_2nd) {
      const username = req.body.username;
      const email = req.body.email;
      const password = await bcrypt.hash(req.body.password, 10);
      const bio = "";
      const date_created = new Date().toISOString().slice(0, 10);

      const newUser = await pool.query(
        "INSERT INTO users (username, email, password, bio, date_created) VALUES($1, $2, $3, $4, $5)",
        [username, email, password, bio, date_created]
      );

      //authorized the user
      //create the token for the user
      const accessToken = generateAccessToken(req.body, 3600); //1hour
      const refreshToken = jwt.sign(req.body, process.env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      res.json({
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } else {
      res.json({ message: "Password does not match!!" });
    }
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
  res.json(getUser.rows[0].username);
});

// deals with the tokens
app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user, 3600);
    res.json({ accessToken: accessToken });
  });
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

//genarate access token
function generateAccessToken(user, tokenTime) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: tokenTime,
  });
}

//login user
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const loginUser = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (req.body.rememberMe) {
      acessTime = 259200; // 1 week
    } else {
      acessTime = 3600; //1 hour
    }
    if (loginUser.rowCount > 0) {
      if (await bcrypt.compare(req.body.password, loginUser.rows[0].password)) {
        //authorized the user
        //create the token for the user
        const accessToken = generateAccessToken(loginUser.rows[0], acessTime);
        const refreshToken = jwt.sign(
          loginUser.rows[0],
          process.env.REFRESH_TOKEN_SECRET
        );
        refreshTokens.push(refreshToken);
        res.json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          username: loginUser.rows[0].username,
        });
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

//logout users and delete refresh token
app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

//Get leaderboard 
app.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await pool.query(
      "SELECT username, points FROM users u, leaderboard l WHERE u.users_id = l.uid ORDER BY points DESC LIMIT 5;"
    );
    res.json(leaderboard.rows);
  } catch (err) {
    console.error(err);
  }
});

//put bio
app.post("/EditBio", async (req, res) => {
  try {
    const { name } = req.body;
    const { bio } = req.body;

    const newUser = await pool.query(
      "UPDATE users SET bio = $1 WHERE (username= $2);",
      [bio, name]
    );
    if (newUser.rowCount == 0) {
      await res.status(400).json({ message: "Could not change bio" });
      return;
    } else {
      await res.status(200).json({ message: "Success" });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong on our end" });
    return;
  }
});

//get bio
app.post("/getBio", async (req, res) => {
  try {
    const { username } = req.body;
    const temp = "jayvin";
    const newUser = await pool.query(
      "SELECT bio FROM users WHERE username = $1",
      [username]
    );

    if (newUser.rowCount == 0) {
      await res.status(400).json({ message: "Could not retrieve bio" });
      return;
    } else {
      await res.status(200).json({ message: newUser.rows[0].bio });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong on our end" });
    return;
  }
});

//reset password
app.post("/settingPassword", async (req, res) => {
  try {
    const { username } = req.body;
    const { token } = req.body;
    const { newpassword } = req.body;
    const { oldpassword } = req.body;
    //gets user info
    const bcryptinfo = await pool.query(
      "SELECT password FROM users WHERE username = $1",
      [token]
    );
    console.log(bcryptinfo.rows[0].password);
    //checks if db password matches the entered password
    if (await bcrypt.compare(oldpassword, bcryptinfo.rows[0].password)) {
      console.log("yo");
      //updates the password
      const updatedUser = await pool.query(
        "UPDATE users SET password = $1 WHERE (username= $2 AND password=$3);",
        [newpassword, token, bcryptpass.rows[0].password]
      );

      if (updatedUser.rowCount == 0) {
        await res.status(404).json({ message: "Username or password incorrect" });
        return;
      } else {
          await res.status(200).json({ message: "Success" });
          return;
      }
    }
    await res.status(404).json({ message: "Username or password incorrect" });
    return;
  } catch (err) {
    res.status(500).json({ message: "password change failed" });
    return;
  }
});

//gets settings info
app.post("/settingInfo", async (req, res) => {
  try {
    const { token } = req.body;

      //gets user info
      const userInfo = await pool.query(
        "SELECT * FROM users WHERE username= $1;",
        [token]
      );

      if (userInfo.rowCount == 0) {
        await res.status(404).json({ message: "Username or password incorrect" });
        return;
      } else {
          console.log(userInfo.rows[0]);
          await res.status(200).json(userInfo.rows[0]);
          return;
      }
  } catch (err) {
    res.status(500).json({ message: "password change failed" });
    return;
  }
});

//compile python
app.post("/compile", async (req, res) => {
  const { script } = req.body;
  var program = {
    script : "import random\n"+ script,
    language: "python3",
    versionIndex: "0",
    clientId: "d8896e07b8825674c4927370ca242325",
    clientSecret:"d426f22083d9109ab085bbb0d62066b935f03a5a7163a9550982ff807724e065",
  };
  const options = {
      method: 'POST',
      body: JSON.stringify(program),
      headers: { 'Content-Type': 'application/json' }
  }
  const resc = await fetch(`https://api.jdoodle.com/v1/execute`, options);
  const json = await resc.json();
  res.send(json);
});

app.get("/getQuestion", async (req, res) => {
  res.json({question: DailyQuestions[question_number].prompt, 
            check: DailyQuestions[question_number].test_code, 
            starter: DailyQuestions[question_number].starter_code
          });
  return;
});

//wildcard
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
