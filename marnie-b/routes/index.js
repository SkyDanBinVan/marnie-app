const express = require("express");
const auth = require('../middleware/auth')
const router = express.Router();

const commandRoute = require("./commandRoute")
const userRoute = require("./userRoute");
const codeRoute = require("./codeRoute");
const setRoute = require("./setRoute");

router.use("/api/commands", commandRoute);
router.use("/api/users", userRoute);
router.use(auth)
router.use("/api/sets", setRoute);
router.use("/api/codes", codeRoute);

module.exports = router;