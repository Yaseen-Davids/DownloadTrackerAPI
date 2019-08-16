exports.up = async (knex) => {
  return knex.schema
    .createTable("UsersLogin", (table) => {
      table.increments("id").primary();
      table.string("username").unique().notNullable();
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
    })
    .createTable("DownloadLinks", (table) => {
      table.increments("id").primary();
      table.string("link").notNullable();
      table.string("title");
    })
    .createTable("Series", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable().unique();
      table.integer("season").notNullable();
      table.integer("episode").notNullable();
      table.timestamp("release_date");
      table.integer("linkId").references("id").inTable("DownloadLinks");
      table.integer("userId").references("id").inTable("UsersLogin");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("Movies", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable().unique();
      table.timestamp("release_date");
      table.integer("linkId").references("id").inTable("DownloadLinks");
      table.integer("userId").references("id").inTable("UsersLogin");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("Games", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("platform");
      table.string("version");
      table.integer("linkId").references("id").inTable("DownloadLinks");
      table.integer("userId").references("id").inTable("UsersLogin");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("Music", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("artist");
      table.timestamp("release_date");
      table.integer("linkId").references("id").inTable("DownloadLinks");
      table.integer("userId").references("id").inTable("UsersLogin");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

exports.down = async (knex) => {
  // return knex.schema.dropTable("UsersLogin").dropTable("DownloadLinks").dropTable("Series").dropTable("Movies").dropTable("Music").dropTable("Games")
};