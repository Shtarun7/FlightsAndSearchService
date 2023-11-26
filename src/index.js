const express = require("express");
const { PORT } = require("./config/serverConfig");
const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  app.listen(PORT, () => {
    console.log(`server started at ${process.env.PORT}`);
  });
};
