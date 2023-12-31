const { Airplane } = require("../models/index.js");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      console.log("airplane repository::get airplane");
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (e) {
      console.log("error::airplane repository:get airplane");
      throw e;
    }
  }
}
module.exports = AirplaneRepository;
