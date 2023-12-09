const express = require("express");

const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");
const router = express.Router();

/*CITY */
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

/**AIRPORT */
router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
// router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
// router.get("/airport", AirportController.getAll);

/**FLIGHT */
router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);

module.exports = router;
