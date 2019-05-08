exports.seed = function(knex, Promise) {
    return knex('backgrounds').insert([
      {
        background: '',
        // first_name: 'background',
        // last_name: '',


      },
    ]);
  };
