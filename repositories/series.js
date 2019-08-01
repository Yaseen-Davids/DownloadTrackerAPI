const knex = require("../knex");

// type SeriesType = {
//   title: string;
//   season: number;
//   episode: number;
// } 
// export const GetSeries = async () => {
//   return knex("series").orderBy("title").select("*");
// }

// export const GetSeriesById = async (id) => {
//   return knex("series").select("*").where("id", id);
// }

// export const CreateSeries = async (series) => {
//   await knex("series").select("*").insert({
//     title: series.title,
//     season: series.season,
//     episode: series.episode,
//   });
// }

// export const UpdateSeries = async (id, series) => {
//   await knex("series").select("*").where("id", id).update({
//     title: series.title,
//     season: series.season,
//     episode: series.episode,
//     updated_at: knex.fn.now(),
//   });
// }

// export const DeleteSeries = async (id) => {
//   await knex("series").select("*").where("id", id).del();
// }

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
    await knex("series").select("*").where("id", id).del();
  },
}