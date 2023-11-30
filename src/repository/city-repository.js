const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (e) {
      console.log("Something went wrong in the repository layer::create city");
      throw { e };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({ where: { id: cityId } });
      return true;
    } catch (e) {
      console.log("error :: city repository: delete city");
      throw { e };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (e) {
      console.log("error::get city");
      throw { e };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, { where: { id: cityId } });
      return city;
    } catch (e) {
      console.log("error:: city repository:update city");
      throw { e };
    }
  }
}

module.exports = CityRepository;
