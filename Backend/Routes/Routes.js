const router = require("express").Router();
const { getUser, editUser, deleteUser, addUser } = require("../Controller/Controller");
//get data
router.get("/user", getUser);

// create data
router.post("/user", addUser);

// edit data
router.put("/user", editUser);

//delete data
router.delete("/user", deleteUser);

// app.get("/methods", (request, response) => {
//   response.status = 200;
//   response.json({
//     currentOS: os.platform(),
//     networkInterface: os.networkInterfaces(),
//     uptime: os.uptime(),
//     version: os.version(),
//     browser: browser(request.headers["user-agent"]),
//   });
// });
module.exports = router;
