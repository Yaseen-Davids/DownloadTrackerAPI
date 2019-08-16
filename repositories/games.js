const knex = require("../knex");
const TABLE = "Games";

module.exports = {
  GetGames: async () => {
    return knex(TABLE).orderBy("title").select("*");
  },

  GetGameById: async (id) => {
    return knex(TABLE).select("*").where("id", id);
  },

  CreateGame: async (game) => {
    await knex(TABLE).insert({
      title: game.title,
      platform: game.platform,
      version: game.version
    });
  },
  
  UpdateGame: async (id, game) => {
    await knex(TABLE).select("*").where("id", id).update({
      title: game.title,
      updated_at: knex.fn.now(),
    });
  },

  DeleteGame: async (id) => {
    await knex(TABLE).where("id", id).del();
  },
}