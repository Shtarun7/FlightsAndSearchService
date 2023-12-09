const { Flights } = require("../models/index.js");
const { Op } = require("sequelize");
class flightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } },
        ],
      });
    }
    if (data.minPrice && !data.maxPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice && !data.minPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (e) {
      console.log("error::flight repository:createfligt");
      throw e;
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (e) {
      console.log("error::flight repository:get flight");

      throw e;
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll({ where: filterObject });
      return flights;
    } catch (e) {
      console.log("error::flight repository:get all flights");

      throw e;
    }
  }
}

module.exports = flightRepository;
