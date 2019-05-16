
exports.seed = function(knex, Promise) {
  // Insert seed entries below
  return knex('candidates').insert([

    {firstName: 'Test', lastName: 'Candidate', email: 'Matt@gmail.com' },
    
 ]);
};
