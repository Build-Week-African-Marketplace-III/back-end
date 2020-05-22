exports.seed = function(knex) {
  return knex("users").insert([
      {
          id:1,
          name: "user one",
          email: "dggtad34556@gmail.com",
          password:"heolol33",
          location: "Florida"
      },
       
      {
          id:2,
          name: "user two",
          email: "dhdoljf@gmail.com",
          password: "dkljhf35",
          location: "New York City",
      },
      {
          id:3,
          name: "user tree",
          email: "dhao093y@gmail.com",
          password:"lskdghj34",
          location:"Atlanta"
        },
      {
          id:4,
          name: "user four",
          email: "tad345@gmail.com",
          password:"ghjk345",
          location:"conakry"
      },
  ]);
};