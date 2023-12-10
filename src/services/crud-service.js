class CrudService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (e) {
      console.log("error::crud service:create");
      throw e;
    }
  }
  async destroy(id) {
    try {
      await this.repository.destroy(id);
    } catch (e) {
      console.log("error::crud repo:delete");
      throw e;
    }
  }
  async get(id) {
    try {
      const response = await this.repository.get(id);
      return response;
    } catch (e) {
      console.log("error::crud repo:get");
      throw e;
    }
  }
  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (e) {
      console.log("error::crud repo:get all");
      throw e;
    }
  }
  async update(id, data) {
    try {
      const response = await this.repository.update(id, data);
      return response;
    } catch (e) {
      console.log("error::crud repo:update");
      throw e;
    }
  }
}

module.exports = CrudService;
