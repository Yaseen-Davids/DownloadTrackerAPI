exports.up = async (knex) => {
  return knex.schema.createTable("series", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable().unique();
      table.float("season").notNullable();
      table.float("episode").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now())
      table.timestamp("updated_at").defaultTo(knex.fn.now())
    })
    .createTable("movies", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now())
      table.timestamp("updated_at").defaultTo(knex.fn.now())
    })
};

exports.down = async (knex) => {
  // return knex.schema.dropTable("series").dropTable("movies")
};