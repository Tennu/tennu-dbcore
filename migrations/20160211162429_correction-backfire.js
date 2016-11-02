
exports.up = function(knex, Promise) {
      return knex.schema.createTable("backfire", function(table) {
        table.increments("id").primary();
        table.string("response").notNullable();
        table.string("created_by").notNullable();
        table.timestamps();
    }).then(function(){
        return knex.schema.createTable("backfireTrigger", function(table) {
            table.increments("id").primary();
            table.string("trigger").notNullable();
            table.integer("backfire_id").unsigned().notNullable().references("id").inTable("backfire");
            table.string("created_by").notNullable();
            table.timestamps();
        });
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("backfire").then(function(){
      return knex.schema.dropTableIfExists("backfireTrigger");
  });
};
