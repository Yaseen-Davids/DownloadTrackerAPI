const knex = require("../knex");
const TABLE = "Music";

module.exports = {
  GetMusic: async () => {
    return knex(TABLE).orderBy("title").select("*");
  },

  GetMusicById: async (id) => {
    return knex(TABLE).select("*").where("id", id);
  },

  CreateMusic: async (music) => {
    await knex(TABLE).insert({
      title: music.title,
      artist: music.artist,
      release_date: music.release_date
    });
  },
  
  UpdateMusic: async (id, music) => {
    await knex(TABLE).select("*").where("id", id).update({
      title: music.title,
      updated_at: knex.fn.now(),
    });
  },

  DeleteMusic: async (id) => {
    await knex(TABLE).where("id", id).del();
  },
}