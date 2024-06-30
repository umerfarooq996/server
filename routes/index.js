const express = require("express");
const router = express.Router();
const mainRoutes = require("./main");
router.use("/api/v1", mainRoutes);
module.exports = router;
