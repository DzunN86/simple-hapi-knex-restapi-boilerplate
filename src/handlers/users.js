'use strict';

const Knex = require('../database');
const Boom = require('@hapi/boom');

module.exports = {
    add: async function (request, h) {

        const isExistUsername = await Knex.select('*').from('users').where('users.username', request.payload.username).first();
        if (isExistUsername) {
            return Boom.forbidden('Ops, username sudah terdaftar. Silahkan ganti dengan username lain.');
        }

        return Knex('users').insert(request.payload)
            .then(res => {
                // return dengan 204 No Content
                return null;
            })
    },

    view: async function (request, h) {

        return Knex.select(['id', 'username', 'email'])
            .from('users')
            .then(res => {
                return res;
            })
    },

    view_id: async function (request, h) {

        return Knex.select(['id', 'username', 'email'])
            .from('users')
            .where('id', request.params.id)
            .first()
            .then(res => {
                return res;
            })
    },

    edit_id: async function (request, h) {

        return Knex('users')
            .update(request.payload)
            .where('id', request.params.id)
            .then(() => {
                // return dengan 204 No Content
                return null;
            })
    },

    delete_id: async function (request, h) {

        return Knex('users')
            .where('id', request.params.id)
            .del()
            .then(() => {
                // return dengan 204 No Content
                return null;
            })
    }
};
