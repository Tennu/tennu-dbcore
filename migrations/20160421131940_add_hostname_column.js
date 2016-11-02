exports.up = function(knex, Promise) {
    return knex.schema.table('message', function(table) {
        table.string('Hostname');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('message', function(table) {
        table.dropColumn('Hostname');
    });
};
