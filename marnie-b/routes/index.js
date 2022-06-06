const express = require("express");
const router = express.Router();

const commandRoute = require("./commandRoute")
const userRoute = require("./userRoute");
const codeRoute = require("./codeRoute");
const setRoute = require("./setRoute");

router.use("/api/commands", commandRoute);
router.use("/api/users", userRoute);
router.use("/api/codes", codeRoute);
router.use("/api/sets", setRoute);

module.exports = router;