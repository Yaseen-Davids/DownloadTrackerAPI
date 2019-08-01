const knex = require("../knex");

module.exports = {
  GetMovies: async () => {
    return knex("movies").orderBy("title").select("*");
  },

  GetMovieById: async (id) => {
    return knex("movies").select("*").where("id", id);
  },

  CreateMovie: async (movie) => {
    await knex("movies").insert({
      title: movie.title,
    });
  },
  
  UpdateMovie: async (id, movie) => {
    await knex("movies").select("*").where("id", id).update({
      title: movie.title,
      updated_at: knex.fn.now(),
    });
  },

  DeleteMovie: async (id) => {
    await knex("movies").where("id", id).del();
  },
}