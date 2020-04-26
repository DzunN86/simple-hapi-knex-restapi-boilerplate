'use strict';

const Joi = require('@hapi/joi');


module.exports = {
    add: Joi.object().keys({
        email: Joi.string().trim().lowercase().email().allow('').required(),
        username: Joi.string().min(4).max(64).regex(/^[A-Za-z0-9]+$/, 'alphabetic').trim().lowercase().required(),
        password: Joi.string().min(5).required()
    }),

    edit: Joi.object().keys({
        email: Joi.string().trim().lowercase().email().allow(''),
        password: Joi.string().min(5).required()
    })
};
