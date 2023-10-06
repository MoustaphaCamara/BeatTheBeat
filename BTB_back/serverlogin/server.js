import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const salt = 10;
const port = 8081;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
  })
);

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "signup",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const verifyUser = (req, res, next) => {
  console.log(req);
  const token = req.body.cookie.token;
  if (!token) {
    return res.json({ Message: "We need token  please provide it. " });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Message: "Authentication Error. " });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.post("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Message: "Server Side Error" });
    if (data.length > 0) {
      bcrypt.compare(req.body.password, data[0].password, (err, result) => {
        if (err) return res.json({ Message: "Authentication error" });
        if (result) {
          const name = data[0].name;
          const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          return res.json({ Status: "Success", token });
        } else {
          return res.json({ Message: "Incorrect password" });
        }
      });
    } else {
      return res.json({ Message: "No Records existed" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?,?,?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Message: "Error for hashing password" });
    const values = [req.body.name, req.body.email, hash];
    db.query(sql, values, (err, result) => {
      if (err) return res.json({ Message: "Inserting data err in server" });
      return res.json({ Status: "Success" });
    });
  });
});

app.listen(port, () => {
  console.log(`server id on ${port}`);
});
