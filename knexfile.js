module.exports = {
	development: {
		client: "sqlite3",
		useNullAsDefault: true, // needed for sqlite
		connection: {
			filename: "./data/market.db3",
		},
		migrations: {
			directory: "../back-end/data/migrations",
		},
		seeds: {
			directory: "../back-end/data/seeds",
		},

		// this is needed when using foreign keys
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run("PRAGMA foreign_keys = ON", done) // turn on FK enforcement
			},
		},
	},
// -----------------------------testing-----------------------
	 testing: {
    client: 'sqlite3',
    connection: { filename: "./data/market-test.db3"},
    useNullAsDefault: true,
    migrations: {
      directory: '../back-end/data/migrations',
    },
	  seeds: { directory:"../back-end/data/seeds" },
	  
	// this is needed when using foreign keys
    pool: {
	afterCreate: (conn, done) => {
		// runs after a connection is made to the sqlite engine
		conn.run("PRAGMA foreign_keys = ON", done) // turn on FK enforcement
	},
		}
	},
	 
}
 