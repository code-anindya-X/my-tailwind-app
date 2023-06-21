const http = require("http");
const express = require("express");
// const chalk = require("chalk");
const app = express();
app.use(express.json());
let data = [
  {
    id: 1,
    name: "rudresh",
    age: 10,
  },
  {
    id: 2,
    name: "rahul",
    age: 20,
  },
  {
    id: 3,
    name: "rajesh",
    age: 50,
  },
];
const PORT = 8000 || process.env.PORT;
app.get("/", (req, res) => {
  res.status(200).json({
    name: "rudresh",
    age: 20,
  });
});
app.post("/createUser", (request, response) => {
  console.log(request.body);
  data = [...data, request.body];
  response.status(201).json({
    message: "data inserted",
    status: 201,
    data: request.body,
  });
});
app.get("/getUserData", (request, response) => {
  response.status(401).json({
    total: data.length,
    data,
  });
});
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("HELLO NODE");
//     res.end();
//     console.log("HELLO NODE LOG");
//   })
//   .listen(8080);
app.listen(PORT, () => {
  console.log("your server is running on",(PORT));
});