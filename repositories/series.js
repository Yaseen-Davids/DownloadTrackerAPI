const knex = require("../knex");

module.exports = {
  GetSeries: async () => {
    return knex("series").orderBy("title").select("*");
  },

  GetSeriesById: async (id) => {
    return knex("series").select("*").where("id", id);
  },

  CreateSeries: async (series) => {
    await knex("series").select("*").insert({
      title: series.title,
      season: series.season,
      episode: series.episode,
    });
  },
  
  UpdateSeries: async (id, series) => {
    await knex("series").select("*").where("id", id).update({
      title: series.title,
      season: series.season,
      episode: series.episode,
      updated_at: knex.fn.now(),
    });
  },

  DeleteSeries: async (id) => {
    await knex("series").where("id", id).del();
  },
}