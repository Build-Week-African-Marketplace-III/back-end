
const knex = require("knex")
const knexConfig = require("../knexfile");

// const dev = process.env.DB_ENV || development;
    
module.exports = knex(knexConfig.development);
