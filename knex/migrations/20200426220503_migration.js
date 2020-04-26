
exports.up = function (knex) {
    return Promise.all([

        knex.schema.hasTable('users').then(function (exists) {
            if (!exists) {
                return knex.schema.createTable('users', function (users) {
                    users.increments('id').primary().notNullable();
                    users.string('email', 150).notNullable();
                    users.string('username', 64).notNullable().unique();
                    users.string('password', 128).notNullable();
                    users.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
                    users.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
                }).then(() => {
                    console.info('\x1b[33m users has been created \x1b[0m');
                })
            }
        }),

    ]);
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
};
