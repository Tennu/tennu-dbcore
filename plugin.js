var Promise = require('bluebird'),
    path = require('path'),
    format = require('util').format;

// Get the path of the module so we can access its assets
const moduleHomeDir = __dirname;
const migrationPath = path.join(moduleHomeDir, 'migrations');

var dbCore = {
    role: 'dbcore',
    init: function(client, imports) {

        var knex = require('knex')(client.config('database'));

        return {
            exports: require('./knex-context')(knex, migrationPath, client)
        };
    }
};

module.exports = dbCore;