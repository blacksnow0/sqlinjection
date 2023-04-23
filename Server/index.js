const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const db = require("./Config/db.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;

app.get("/", function (req, res) {
  db.query("SELECT * FROM users", function (err, results, fields) {
    if (err) {
      console.error("Error executing MySQL query: " + err.stack);
      return;
    }
    res.json(results);
  });
});

app.post("/login", (req, res) => {
  const reqBody = req.body;
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  db.query(sql, [reqBody.email, reqBody.password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.length > 0) {
        const user = {
          id: result[0].id,
          name: result[0].name,
          email: result[0].email,
        };
        res.send(user);
      } else {
        res.status(401).send("Invalid email or password");
      }
    }
  });
});

app.get("");

app.listen(PORT, () => {
  console.log("Server started at port ", PORT);
});
