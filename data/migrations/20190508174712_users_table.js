
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_table', function(users) {
      users.increments();
      users.string('name')
        .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_table');
};
