const knex = require("../knex");
const TABLE = "Music";

module.exports = {
  GetGames: async () => {
    return knex(TABLE).orderBy("title").select("*");
  },

  GetGameById: async (id) => {
    return knex(TABLE).select("*").where("id", id);
  },

  CreateGame: async (music) => {
    await knex(TABLE).insert({
      title: music.title,
      artist: music.artist,
      release_date: music.release_date
    });
  },
  
  UpdateGame: async (id, music) => {
    await knex(TABLE).select("*").where("id", id).update({
      title: music.title,
      updated_at: knex.fn.now(),
    });
  },

  DeleteGame: async (id) => {
    await knex(TABLE).where("id", id).del();
  },
}