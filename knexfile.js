'use strict';

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            database: 'hapi_knex_dev',
            user: 'root',
            password: '',
            charset: 'utf8',
            // This is used to type cast server date/time values to JavaScript Date object and vice versa
            timezone: 'UTC',
            dateStrings: true,
            supportBigNumbers: true,
            typeCast: function (field, next) {
                if (field.type == 'TIMESTAMP') {
                    let val = field.string();
                    try {
                        return new Date(val + ' GMT').toISOString();
                    } catch (e) {
                        return val;
                    }
                }

                return next();
            }
        },
        pool: {
            min: 2,
            max: 400,
            afterCreate: function (connection, callback) {
                connection.query('SET time_zone = "+00:00";', function (err) {
                    callback(err, connection);
                })
            }
        },
        acquireConnectionTimeout: 90000,
        asyncStackTraces: true,
        migrations: {
            directory: './knex/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './knex/seeds',
        },
        log: {
            warn(message) { },
            error(message) { },
            deprecate(message) { },
            debug(message) { },
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database: 'hapi_knex_prod',
            user: 'root',
            password: '',
            charset: 'utf8',
            // This is used to type cast server date/time values to JavaScript Date object and vice versa
            timezone: 'UTC',
            dateStrings: true,
            supportBigNumbers: true,
            typeCast: function (field, next) {
                if (field.type == 'TIMESTAMP') {
                    let val = field.string();
                    try {
                        return new Date(val + ' GMT').toISOString();
                    } catch (e) {
                        return val;
                    }
                }

                return next();
            }
        },
        pool: {
            min: 2,
            max: 400,
            afterCreate: function (connection, callback) {
                connection.query('SET time_zone = "+00:00";', function (err) {
                    callback(err, connection);
                })
            }
        },
        acquireConnectionTimeout: 90000,
        migrations: {
            directory: './knex/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './knex/seeds'
        }
    }
}
