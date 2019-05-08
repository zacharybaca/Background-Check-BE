 exports.up = function(knex, Promise) {
    return knex.schema.createTable('backgrounds', function(tbl) {
    
    tbl.increments()
    // tbl.boolean('completed');
    tbl.string('background');
    // tbl.string('last_name');
    // tbl.string('first_name')
    // .notNullable();
    })
  }

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableifExists('backgrounds')
  };
