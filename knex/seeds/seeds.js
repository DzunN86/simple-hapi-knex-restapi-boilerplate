'use strict';

exports.seed = function (knex) {


    return Promise.all([

        knex('users').del().then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    username: 'user01',
                    email: 'fulan@email.com',
                    password: 'password123'
                },
                {
                    username: 'user02',
                    email: 'zaid@email.com',
                    password: 'pass123'
                },
            ]);
        })

    ])

};
