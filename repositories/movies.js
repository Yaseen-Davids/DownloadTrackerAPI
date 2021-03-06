const knex = require("../knex");
const TABLE = "Movies";

module.exports = {
  GetMovies: async () => {
    return knex(TABLE).orderBy("title").select("*");
  },

  GetMovieById: async (id) => {
    return knex(TABLE).select("*").where("id", id);
  },

  CreateMovie: async (movie) => {
    await knex(TABLE).insert({
      title: movie.title,
      release_date: movie.release_date
    });
  },
  
  UpdateMovie: async (id, movie) => {
    await knex(TABLE).select("*").where("id", id).update({
      title: movie.title,
      release_date: movie.release_date,
      updated_at: knex.fn.now(),
    });
  },

  DeleteMovie: async (id) => {
    await knex(TABLE).where("id", id).del();
  },
}