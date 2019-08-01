exports.up = async (knex) => {
  return knex.schema.table("series", (table) => {
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
  .table("movies", (table) => {
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
};

exports.down = async (knex) => {
  // knex.schema.dropTableIfExists("series")
  // knex.schema.dropTableIfExists("movies")
};