const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  //  CAN BE TRUE OR FALSE
  app.use(express.urlencoded({ extended: false }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at ${process.env.PORT}`);
    // console.log("city", City);
  });
};

setupAndStartServer();
