// const { Airport } = require("../models/index.js");
// const { Op } = require("sequelize");

// class AirportRepository {
//   async createAirport(data) {
//     try {
//       const airport = await Airport.bulkCreate(data);
//       return airport;
//     } catch (e) {
//       console.log(
//         "Something went wrong in the repository layer::create airport"
//       );
//       throw { e };
//     }
//   }

//   async updateAirport(airportId, data) {
//     try {
//       const airport = await Airport.update(data, {
//         where: {
//           id: airportId,
//         },
//       });

//       return "Airport Updated Succesfuly";
//     } catch (e) {
//       console.log(
//         "Something went wrong in the repository layer::update airport"
//       );
//       throw { e };
//     }
//   }
//   async deleteAirport(airportId) {
//     try {
//       const airport = await Airport.destroy({
//         where: {
//           id: airportId,
//         },
//       });
//       return airport;
//     } catch (e) {
//       console.log("error::airport repository :delete airport");
//       throw { e };
//     }
//   }
// }

// module.exports = AirportRepository;

const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
