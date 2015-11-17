var Promise = require('bluebird');
var path = require('path');
var format = require('util').format;
var knex = require('knex');

// Get the path of the module so we can access its assets
const moduleHomeDir = __dirname;
const migrationPath = path.join(moduleHomeDir, 'migrations');

var dbCore = {
    role: 'dbcore',
    init: function(client, imports) {

        var configuredKnex = knex(client.config('database'));

        return {
            exports: require('./knex-context')(configuredKnex, migrationPath, client)
        };
    }
};

module.exports = dbCore;