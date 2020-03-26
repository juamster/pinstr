import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { pinsService } from "../services/PinsService";

export class PinsController extends BaseController {
  constructor() {
    super("api/pins");
    this.router
      .get("", this.getAll)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let pins = await pinsService.getAll(req.query);
      return res.send(pins);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let pin = await pinsService.create(req.body);
      res.send(pin);
    } catch (error) {
      next(error);
    }
  }
}
