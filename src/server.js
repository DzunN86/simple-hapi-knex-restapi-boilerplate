'use strict';

const Config = require('./config');
const Common = require('./helpers/common');
const Hapi = require('@hapi/hapi');
const Boom = require('@hapi/boom');

const Main = async () => {
    const server = new Hapi.server({
        port: Config.PORT,
        host: Config.HOST,
        debug: process.env.NODE_ENV === 'production' ? { request: ['false'] } : { request: ['error'] },
        routes: {
            // security: true,
            cors: {
                credentials: true,
                origin: ['*'],
                headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'x-token', 'x-infos', 'x-xsrf-token', 'x-csrf-token', 'etag'],
                additionalExposedHeaders: ['X-Token', 'X-Data-Total', 'X-Pagination-Limit-Perpage', 'X-Pagination-Total-Page']
            },
            validate: {
                failAction: async (request, h, err) => {
                    throw Boom.badRequest(err.message);
                }
            }
        }
    });

    await server.register(Common.requireAllRoutesFiles(), {
        routes: {
            /*
             * Memberikan prefix pada semua route path, sesuai di file config.js dengan PREFIX_ROUTE '/api'.
             * Contoh path route '/users' maka nantinya menjadi '/api/path'
             */
            prefix: !!Config.PREFIX_ROUTE && Config.PREFIX_ROUTE.trim() !== '' ? Config.PREFIX_ROUTE : undefined
        }
    });

    await server.start();

    return `
    ========================================================================
    \x1b[33m Server berjalan di:\x1b[92m ${server.info.uri} \x1b[0m
    \x1b[33m Jumlah Route Path Api:\x1b[92m ${server.table().length} \x1b[0m
    `;
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

module.exports = Main;
