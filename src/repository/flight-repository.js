const { Flights } = require("../models/index.js");
class flightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;    
    } catch (e) {
      console.log("error::flight repository:createfligt");
      throw e;
    }
  }
}

module.exports = flightRepository;
