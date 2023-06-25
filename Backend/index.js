// const http = require("http");
const express = require("express");
// const chalk = require("chalk");
const morgan = require("morgan");
const app = express();
const os = require("os");
const browser = require("browser-detect");
app.use(express.json()); // to parse payload
app.use(morgan("dev"));
const router= require("./Routes/Routes")
// app.use(express.json());

const PORT = 8000 || process.env.PORT;
// app.get("/", (req, res) => {
//   res.status(200).json({
//     name: "rudresh",
//     age: 20,
//   });
// });
app.use(router);

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