function knexContext(knex, migrationPath, client) {
    return MigrateAndSeed(knex, migrationPath, client).then(function() {
        return knex;
    });
}

// private
function MigrateAndSeed(knex, migrationPath, client) {
    return knex.migrate.latest({
        directory: migrationPath
    }).then(function() {
        client._logger.notice('DBCore: database initialized.');
    });
}

module.exports = knexContext;