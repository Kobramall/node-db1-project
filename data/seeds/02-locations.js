const locations = [
  { name: 'Orem UT', zipCode: 84043 },
  { name: 'Lehi Ut', zipCode: 84057 },
]

exports.accounts = locations

exports.seed = function (knex) {
  return knex('accounts').truncate()
    .then(function () {
      return knex('accounts').insert(locations);
    });
};
