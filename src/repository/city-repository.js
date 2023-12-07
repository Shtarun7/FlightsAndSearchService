const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  constructor(){
    console.log('city repo constructor called')
  }
  async createCity(data){
    try {
      const city = await City.bulkCreate(data);
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

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: { [Op.startsWith]: filter.name },
          },
        });

        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (e) {
      console.log("error::get all cities:city repository");
      throw { e };
    }
  }
  async updateCity(cityId, data) {
    try {
      //THE BELOW APPROACH ALSO WORKS BUT WILL NOT RETURN UPDATED OBJECT
      // const city = await City.update(data, { where: { id: cityId } });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (e) {
      console.log("error:: city repository:update city");
      throw { e };
    }
  }
}

module.exports = CityRepository;
