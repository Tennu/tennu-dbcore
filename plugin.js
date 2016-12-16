var knex = require('knex');

var dbCore = {
    role: 'dbcore',
    name: 'dbcore',
    init: function(client, imports) {
        var databaseConfiguration = client.config('database');
        return {
            exports: {
                knex: knex(databaseConfiguration),
                databaseConfiguration: databaseConfiguration
            }
        };
    }
};

module.exports = dbCore;
