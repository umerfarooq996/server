const express = require("express");
const cors = require("cors");
function setupMiddleware(app) {
  app.use(express.json());

  app.use(cors({
    origin: "*",
  }));
}

module.exports = setupMiddleware;
