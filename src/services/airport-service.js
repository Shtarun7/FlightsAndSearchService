const AirportRepository = require("../repository/airport-repository");
class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }
  async createAirport(data) {
    try {
      const airports = await this.airportRepository.createAirport(data);
      return airports;
    } catch (e) {
      console.log("error::airport service layer:create airport");
      throw e;
    }
  }

  async updateAirport(airportId, data) {
    try {
      const message = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return message;
    } catch (e) {
      console.log("error::airport service:update airport");
      throw e;
    }
  }

  async deleteAirport(airportId) {
    try {
      const airport = await this.airportRepository.deleteAirport(airportId);
      return airport;
    } catch (e) {
      console.log("error::airport service layer:delete airport");
      throw e;
    }
  }
}

module.exports = AirportService;
