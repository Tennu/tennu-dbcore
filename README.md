# tennu-dbcore

A plugin for the [tennu](https://github.com/Tennu/tennu) irc framework.

tennu-dbcore uses [knex](http://knexjs.org/) on its backend. This means that if you wish to change from the default Sqlite3 DB you will have to follow their documentation and update the configuration below. I have provided a couple of examples.

### Configuration

Add this to your tennu configuration (be sure to strip comments):

```javascript
"database": {
    "client": "sqlite3",
    "connection": {
      "filename": "./tennu.sqlite"
    }
}
```

```javascript
// make sure to `npm install mysql2`
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

### Current/Future plugins that require dbcore
- [tennu-dblogger](https://github.com/LordWingZero/tennu-dblogger)
- [tennu-advanced-seen](https://github.com/LordWingZero/tennu-aseen)
- [tennu-title](https://github.com/LordWingZero/tennu-title)
- [tennu-correction](https://github.com/LordWingZero/tennu-correction)
- tennu-tell (comming soon)
- tennu-response (comming soon)


### Installing Into Tennu

See Downloadable Plugins [here](https://tennu.github.io/plugins/).

### Todo:

- Tests