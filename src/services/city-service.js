const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (e) {
      console.log("error::service layer:create city");
    }
  }
  async deleteCity(cityId) {
    try {
      const response = this.cityRepository.deleteCity(cityId);
      return response;
    } catch (e) {
      console.log("error::service layer:delete city");
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (e) {
      console.log("error::service layer:update city");
    }
  }
  async getCity(cityId) {
    try {
      const city = this.cityRepository.getCity(cityId);
      return city;
    } catch (e) {
      console.log("error::service layer:get city");
    }
  }
}
