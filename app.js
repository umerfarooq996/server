require("dotenv").config();
const express = require("express");

const setupMiddleware = require("./middlewares/middleware");
const logger = require("./utils/logger");
const connectDB = require("./db/db");
const { PRODUCTION } = require("./config/config");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 8084;

setupMiddleware(app);
app.use("/", routes);
app.get("/", async (req, res) => {
  try {
    res.send("Server running");
  } catch (e) {
    logger.error(e);
    res.status(500).send(e);
  }
});

console.log(PRODUCTION);
connectDB()
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      logger.info(`Server ready at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    logger.error("Error starting server:", err);
  });
