const { FlightService } = require("../services/index.js");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    res.status(201).json({
      data: flight,
      success: true,
      message: "Succesfuly created a flight",
      err: {},
    });
  } catch (e) {
    console.log("error::create :flight controller");
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: e,
    });
  }
};

module.exports = { create };
