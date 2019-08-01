exports.up = async (knex) => {
  knex.schema.alterTable("series", function (table) {
    table.string("title").unique().alter()
  })
};

exports.down = async (knex) => {
  // knex.schema.dropTableIfExists("series")
};