'use strict';

const usersHandler = require('../handlers/users');
const usersValidation = require('../validations/users');


exports.plugin = {
    name: 'UsersRoute',
    register: (server, options) => {

        server.route({
            method: 'POST',
            path: '/users',
            handler: usersHandler.add,
            options: {
                validate: {
                    payload: usersValidation.add
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/users',
            handler: usersHandler.view
        });

        server.route({
            method: 'GET',
            path: '/users/{id}',
            handler: usersHandler.view_id,
        });

        server.route({
            method: 'PUT',
            path: '/users/{id}',
            handler: usersHandler.edit_id,
            options: {
                validate: {
                    payload: usersValidation.edit
                }
            }
        });

        server.route({
            method: 'DELETE',
            path: '/users/{id}',
            handler: usersHandler.delete_id
        });

    }
};
