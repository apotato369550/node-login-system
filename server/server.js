// add boilerplate server here copy from other project
const express = require("express");
const mysql = require("mysql");

const app = express();
const cors = require("cors");

// install cors here
// cors working??
app.use(cors());
app.use(express.json());

// unknown database?
// test this later next time

// this works
// make a git commit
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "node_login_system"
})
// test registration
// continue watching video to find error
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if(err){
                res.send({ err: err});
            }

            // test if this finally works
            if(result.length > 0) {
                res.send(result);
            } else {
                // smth wrong w/ this message
                // watch video, fix, and continue with main project
                res.send({message: "Wrong username/password combination"})
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Running server on port 3001");
})