const AirportService = require("../services/airport-service");
const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airports = await airportService.createAirport(req.body.airports);
    return res.status(201).json({
      data: airports,
      success: true,
      message: "succesfuly created airports",
      err: {},
    });
  } catch (e) {
    console.log("error :: airport-controller:create");
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a Airport",
      err: e,
    });
  }
};

const update = async (req, res) => {
  try {
    // console.log(req.params.id, req.body);
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "airport updated succesfuly",
      err: {},
    });
  } catch (e) {
    res.status(500).json({
      data: {},
      success: false,
      message: "cannot update airport",
      err: e,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "airport deleted succesfuly",
      err: {},
    });
  } catch (e) {
    console.log("error::airport controller:destroy");
    res.status(500).json({
      data: {},
      success: false,
      message: "cannot delete airport",
      err: e,
    });
  }
};
module.exports = { create, update, destroy };
