
exports.seed = async (knex) => {
  await knex("Series").del()
  await knex("Series").insert([
    { title: "Baby Daddy", season: 1, episode: 8 },
    { title: "Two and a half men", season: 3, episode: 10 },
    { title: "Avatar - Legend of Korra", season: 2, episode: 7 },
    { title: "The Gifted", season: 3, episode: 14 },
    { title: "The Flash", season: 5, episode: 20 },
    { title: "The 100", season: 6, episode: 1 },
    { title: "Full House", season: 7, episode: 1 },
    { title: "Titans", season: 1, episode: 10 },
    { title: "Dark Net", season: 1, episode: 6 },
    { title: "Arrow", season: 7, episode: 20 },
    { title: "Brooklyn Nine Nine", season: 6, episode: 14 },
    { title: "Impractical Jokers", season: 8, episode: 9 },
  ]);
  await knex("Movies").del()
  await knex("Movies").insert([
    { title: "Aladdin" },
    { title: "Spider-Man Homecoming" },
    { title: "Shaft" },
    { title: "Godzilla King of the Monsters" },
    { title: "The Secret Life of Pets 2" },
  ]);
  await knex("Games").del()
  await knex("Games").insert([
    { title: "Minecraft", platform: "PC" },
    { title: "The Forest", platform: "PC" },
    { title: "Subnautica", platform: "PC" },
    { title: "Stranded Deep", platform: "PC" },
  ]);
  await knex("Music").del()
  await knex("Music").insert([
    { title: "Blame", artist: "Bryson Tiller" },
  ]);
}