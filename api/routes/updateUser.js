const express = require("express");
const UpdateUser = express.Router();

UpdateUser.put("update-user", (req, res) => {
  res.send("User update sucessfully");
});

module.exports = UpdateUser;
