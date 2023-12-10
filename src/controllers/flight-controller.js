const { FlightService } = require("../services/index.js");
const {SuccessCodes}=require('../utils/error-codes.js')
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);

    res.status(SuccessCodes.CREATED).json({
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

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlightsData(req.query);
    res.status(SuccessCodes.OK).json({
      data: flights,
      success: true,
      message: "Succesfuly fetched all flights",
      err: {},
    });
  } catch (e) {
    console.log("error::get all flights :flight controller:");
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all flights",
      err: e,
    });
  }
};
module.exports = { create, getAll };
