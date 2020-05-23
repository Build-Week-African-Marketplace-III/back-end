
const knex = require("knex")
const knexConfig = require("../knexfile");
    
module.exports = knex(knexConfig.development);

// const knex = require("knex")
// const knexfile = require("../knexfile")

// const environment = process.env.NODE_ENV || "dev"

// module.exports = knex(knexfile[environment])