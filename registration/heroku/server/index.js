const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//Create a User

app.post("/users", async (req, res) => {
    try {
        const { username } = req.body;
        const { password } = req.body;

        const newUser = await pool.query("INSERT INTO users (username, password) VALUES($1, $2)", [username, password]);
        res.json(newUser);
    } catch (err) {
        console.error(err.message);
    }
})


//login user
app.post("/login", async (req, res) => {
    try {
        const { username } = req.body;
        const { password } = req.body;

        const loginUser = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);
        if (loginUser.rowCount > 0) {
            res.json(loginUser.rows);
        } else {
            res.json({ message: "Wrong username/password" });
        }

    } catch (err) {
        console.error(err.message);
    }
})

const db = mysql.createConnection({
    
    /*user: "riolosrzjbhdxa",
    host: "ec2-54-198-73-79.compute-1.amazonaws.com",
    password: "b37ac7ad7e6047f9c7a5fa1f8bb200761989d11c934c1ac0716907e34ed71efd",
    database: "d5ojq5fg16io3j"*/
    
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem"
});

/*db.connect(err => {
    if (!err) {
        console.log("DB Connection Succeeded");
    } else {
        console.log(err);
    }
});*/
app.listen(3001, () => {
    console.log("running server");
});