const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index.js");
const { compareTime } = require("../utils/helper.js");
class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        console.log("arrival time  cannot be less than departure time");
        throw { error: "Arrival time cannot be less than departure time" };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (e) {
      console.log("error::flight service:create flight");
      throw e;
    }
  }

  async getAllFlightsData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (e) {
      console.log("error::flight service:get all flights");

      throw e;
    }
  }
}

module.exports = FlightService;
