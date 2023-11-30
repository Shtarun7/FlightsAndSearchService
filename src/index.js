const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  app.listen(PORT, async () => {
    console.log(`server started at ${process.env.PORT}`);
    // console.log("city", City);
    const repo = new CityRepository();
    repo.createCity({ name: "LA" });
  });
};

setupAndStartServer();
