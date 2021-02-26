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