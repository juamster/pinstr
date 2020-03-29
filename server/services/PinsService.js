import { dbContext } from "../db/DbContext";

class PinsService {
  async getAll(query = {}) {
    // TODO BL goes here
    return await dbContext.Pins.find(query).populate("creator", "name picture -email");
    // return await dbContext.Pins.find({ ...query, 'deleted': false }).populate("creator", "name picture -email");
  }
  async getOne(id) {
    // TODO BL goes here
    return await dbContext.Pins.findById(id).populate("creator", "name picture -email");
  }
  async create(pin) {
    return await dbContext.Pins.create(pin);
  }

  async delete(id) {
    // let aPin = await this.getById(id);
    // @ts-ignore

    return await dbContext.Pins.findByIdAndDelete(id);
  }

  async getById(id) {
    let pin = await dbContext.Pins.findById(id);
    if (!pin) {
      // throw new BadRequest("Invalid Id");
      console.log("Trying to delete but got a bad pin");
    }
    return pin;
  }


}

export const pinsService = new PinsService();