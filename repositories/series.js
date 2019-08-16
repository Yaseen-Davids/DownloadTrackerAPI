const knex = require("../knex");
const TABLE = "Series";

module.exports = {
  GetSeries: async () => {
    return knex(TABLE).orderBy("title").select("*");
  },

  GetSeriesById: async (id) => {
    return knex(TABLE).select("*").where("id", id);
  },

  CreateSeries: async (series) => {
    await knex(TABLE).select("*").insert({
      title: series.title,
      season: series.season,
      episode: series.episode,
      release_date: series.release_date,
    });
  },
  
  UpdateSeries: async (id, series) => {
    await knex(TABLE).select("*").where("id", id).update({
      title: series.title,
      season: series.season,
      episode: series.episode,
      release_date: series.release_date,
      updated_at: knex.fn.now(),
    });
  },

  DeleteSeries: async (id) => {
    await knex(TABLE).where("id", id).del();
  },
}