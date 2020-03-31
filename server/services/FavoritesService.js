import { dbContext } from "../db/DbContext";

class FavoritesService {


  async create(email, favoriteData) {
    favoriteData.creatorEmail = email;
    return await dbContext.Favorites.create(favoriteData);
  }

  async get(query = {}) {
    //NOTE: should this query be passed in from the Controller?? How?
    return await dbContext.Favorites.find(query);
  }


  async delete(email, favoriteData) {

    // @ts-ignore
    return await dbContext.Favorites.findOneAndRemove({ creatorEmail: email, _id: id });
  }
}

export const favoriteService = new FavoritesService();