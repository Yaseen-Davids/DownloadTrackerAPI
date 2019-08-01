
exports.seed = async (knex) => {
  await knex("series").del()
  await knex("series").insert([
    { title: "Stranger Things", season: 3, episode: 4 },
    { title: "Dark", season: 1, episode: 1 },
    { title: "Arrow", season: 7, episode: 20 },
    { title: "Avatar", season: 3, episode: 9 },
    { title: "Brooklyn Nine Nine", season: 6, episode: 14 },
    { title: "The Flash", season: 5, episode: 20 },
  ]);
  await knex("movies").del()
  await knex("movies").insert([
    { title: "Avengers Endgame" },
    { title: "Spider-Man Homecoming" },
    { title: "Shaft" },
  ])
};