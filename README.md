# tennu-dbcore

A plugin for the [tennu](https://github.com/Tennu/tennu) irc framework.

tennu-dbcore uses [knex](http://knexjs.org/) on its backend. This means that if you wish to change from the default Sqlite3 DB you will have to follow their documentation and update the configuration below. I have provided a couple of examples.

## Upgrade Information

Version 2 moved all migrations off to their own plugins. This way upgrading a plugin wont require also upgrading dbcore.

Because they use their own migration tables now, they will try and run migrations twice.

Back up all your data before upgrading and be prepared to do imports/exports.

## Installation

You might have to install your database provider at the plugin level. IE: run `npm install sqlite3` inside your-bot/npm_modules/tennu-dbcore/.

The reason for this is I do not want to impose sqlite3 or/and mysql2 as a dependency on anyone. But one is required by knex.

## Configuration

Add this to your tennu configuration (be sure to strip comments):

### sqlite3

```javascript
// Make sure to `npm install sqlite3`.
"database": {
    "client": "sqlite3",
    "connection": {
      "filename": "./tennu.sqlite"
    }
}
```

### mysql2

```javascript
// Mke sure to `npm install mysql2`.
"database": {
    "client": "mysql2",
    "connection": {
        "host": "localhost",
        "user": "tennu-bot",
        "password": "password",
        // make sure this db actually exists, and that your user has access to it
        "database": "tennu"
    }
  }
```

### Plugins that require dbcore

- [tennu-dblogger](https://github.com/Tennu/tennu-dblogger)
- [tennu-advanced-seen](https://github.com/Tennu/tennu-aseen)
- [tennu-title](https://github.com/Tennu/tennu-title)
- [tennu-tell](https://github.com/Tennu/tennu-tell)
- [tennu-respond](https://github.com/Tennu/tennu-respond)
- tennu-ban-control (coming soon)


### Installing Into Tennu

See Downloadable Plugins [here](https://tennu.github.io/plugins/).