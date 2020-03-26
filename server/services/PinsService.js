import { dbContext } from "../db/DbContext";

class PinsService {
  async getAll(query = {}) {
    return await dbContext.Pins.find(query);
  }
  async create(pin) {
    return await dbContext.Pins.create(pin);
  }
}

export const pinsService = new PinsService();