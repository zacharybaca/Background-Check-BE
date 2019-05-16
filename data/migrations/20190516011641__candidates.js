
exports.up = function(knex, Promise) {
    return knex.schema.createTable('candidates', tbl => {
        tbl.increments();
  
        // tbl.string('resource').notNullable();
        // tbl.string('created').notNullable().unique();
        // tbl.string('updated').notNullable();
        tbl.string('firstName').notNullable();
        tbl.string('lastName').notNullable();
        tbl.string('email').notNullable().unique();
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('candidates')
  };
