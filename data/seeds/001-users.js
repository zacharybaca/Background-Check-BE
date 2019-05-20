
exports.seed = function(knex, Promise) {
  // Insert seed entries below
  return knex('users').insert([
    {name: 'Matt', username: 'Matt1234', password: 'pass', usertype: 'free', email: 'Matt@gmail.com' },
    {name: 'Billy', username: 'Billy1234', password: 'pass', usertype: 'premium', email: 'Billy@gmail.com' },
    {name: 'Rachel', username: 'Rachel1234', password: 'pass', usertype: 'free', email: 'Rachel@gmail.com' },
    {name: 'Lucile', username: 'Lucile1234', password: 'pass', usertype: 'premium', email: 'Lucile@gmail.com' },
 ]);
};
