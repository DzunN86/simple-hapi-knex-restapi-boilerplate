'use strict';

module.exports = {
    HOST: 'localhost',              // bisa diisi dengan 0.0.0.0 agar bisa diakses di dalam satu jaringan
    PORT: 3003,
    PREFIX_ROUTE: '/api',           // bisa juga diisi semisal '/api/v1' untuk versioning
    DIRECTORY: {
        CWD: process.cwd(),
        SRC: __dirname
    },
};
