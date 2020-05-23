exports.seed = function(knex) {
  return knex("items").insert([
      {
          id:1,
          name: "item one",
          location:'some location',
          description: "this is the first item's description",
          price:34.4,
      },
       
      {
          id:2,
          name: "item two",
          location:'some location',
          description: "this is the third item's description",
          price:67.00,
      },
      {
          id:3,
          name: "item tree",
          location:'some location',
          description: "this is the fourth item's description",
          price:23.56,
        },
      {
          id:4,
          name: "item four",
          location:'some location',
          description: "this is the first item's description",
          price:90.23,
      },
  ]);
};