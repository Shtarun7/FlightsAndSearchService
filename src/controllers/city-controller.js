const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfuly created city",
      err: {},
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: e,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const city = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfuly deleted city",
      err: {},
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: e,
    });
  }
};
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfuly updated a city",
      err: {},
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: e,
    });
  }
};
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfuly fetched a city",
      err: {},
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a city",
      err: e,
    });
  }
};

const getAll = async (req, res) => {
  try {
    // console.log(req.query);
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "successfuly fetched all the cities",
      err: {},
    });
  } catch (e) {
    console.log("error in :: controller :get all city", e);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch cities",
      err: e,
    });
  }
};

module.exports = { create, destroy, get, getAll, update };
