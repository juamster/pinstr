import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { favoriteService } from "../services/FavoritesService";


export class FavoritesController extends BaseController {


  constructor() {
    super("api/favorites/");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      // this puts userInfo on req
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.get)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  /* 
   * This will get all in the database that are not deleted
   */
  async get(req, res, next) {
    try {

      req.query.creatorEmail = req.userInfo.email;
      let data = await favoriteService.get(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }


  /* 
   * Creates a new favorite for the current user
   */
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID

      let newFavorite = await favoriteService.create(req.userInfo.email, req.body);
      res.send(newFavorite);
    } catch (error) {
      next(error);
    }
  }

  /*  
   * Soft delete a particular favorite
   */
  async delete(req, res, next) {
    try {
      let favorite = await favoriteService.delete(req.userInfo.email, req.params.id);
      res.send(favorite);
    } catch (e) {
      next(e);
    }
  }
}