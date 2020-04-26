'use strict';

const server = require('./src/server');

server().then(info => {

    console.log(info);

}).catch(err => {

    console.log(err);
    process.exit(1);

})
