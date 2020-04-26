'use strict';

const Fs = require('fs');
const Path = require('path');
const Config = require('../config');


const requireAllRoutesFiles = function () {
    const dirRoutes = Path.join(Config.DIRECTORY.SRC, 'routes');

    return Fs.readdirSync(dirRoutes).map(file => {
        return require(Path.join(dirRoutes, file));
    })

};


module.exports = {
    requireAllRoutesFiles
};