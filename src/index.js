const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const { City, Airport } = require("./models/index");
const db = require("./models/index");
const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  //  CAN BE TRUE OR FALSE
  app.use(express.urlencoded({ extended: false }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at ${process.env.PORT}`);
    // console.log("city", City);
    if (process.env.SYNC_DB == "true") {
      db.sequelize.sync({ alter: true });
    }
    // const city = await City.findOne({
    //   where: {
    //     id: 2,
    //   },
    // });
    // const airports = await city.getAirports();
    // console.log(airports);

    // const newAirport = await Airport.create({
    //   name: "Echo Bay Airport",
    //   cityId: 1,
    // });
    // await city.addAirport(newAirport);

    // console.log(city,airports)
    //FIND THE CITY->APPLY JOIN->GET RESULTS
    const cityId = 1;
    const city = await City.findByPk(cityId);
    // console.log(city);
    const airports = await City.findAll({
      where: { id: cityId },
      include: [{ model: Airport }],
      fields:['airports']
    });
    console.log(JSON.stringify(airports));
  });
};

setupAndStartServer();
