// const http = require("http");
const express = require("express");
// const chalk = require("chalk");
const morgan = require("morgan");
const app = express();
const os = require("os");
const browser = require("browser-detect");
app.use(express.json()); // to parse payload
app.use(morgan("dev"));
// app.use(express.json());
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
// app.get("/", (req, res) => {
//   res.status(200).json({
//     name: "rudresh",
//     age: 20,
//   });
// });
// create data
app.post("/user", (request, response) => {
  const body = request.body;
  data = [...data, body];
  response.status(201).json({
    message: "data inserted",
    status: 201,
    // data: request.body,
    body,
  });
});
app.get("/user", (request, response) => {
  const responseObj = {
    total: data.length,
    data,
    message: "SUCCESS",
    status: 200,
  };
  response.status(200).json(responseObj);
});

// edit data
app.put("/user", (request, response) => {
  const body = request.body;
  const params = request.query;
  const user = data.find((ele) => ele.id === +params.id);
  user.name = body.name;
  response.status(201).json({
    status: 201,
    message: "entry updated",
  });
});
//delete data
app.delete("/user", (request, response) => {
  const params = request.query;
  const updatedData = data.filter((ele) => ele.id !== +params.id);
  data = [...updatedData];
  response.status(200).json({
    status: 200,
    message: "user deleted",
  });
});
app.get("/methods", (request, response) => {
  response.status = 200;
  response.json({
    currentOS: os.platform(),
    networkInterface: os.networkInterfaces(),
    uptime: os.uptime(),
    version: os.version(),
    browser: browser(request.headers["user-agent"]),
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
  console.log("your server is running on", (PORT));
});