
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name:"user1", email:"email1",password: "senha1"},
        {name:"user2", email:"email2",password: "senha2"},
        {name:"user3", email:"email3",password: "senha3"},
        {name:"user4", email:"email4",password: "senha4"},
      ]);
    });
};
