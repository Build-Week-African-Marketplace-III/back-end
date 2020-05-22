exports.up = async function (knex) {

  await knex.schema.createTable("users", (table) => {
    table.increments("id")
      table.string("name").notNull().unique()
      table.string("email").notNull().unique()
      table.string("password").notNull()
      table.string("location")
  })
	// await knex.schema.createTable("categories", (table) => {
    //     table.increments("id")
    //     table.string("name").notNull().unique()
    //     table.string("description")
	// 	table.integer("user_id")
	// 		.references("id")
	// 		.inTable("users")
	// 		.onDelete("SET NULL")
	// 		.onUpdate("CASCADE")
	// })

	await knex.schema.createTable("items", (table) => {
		table.increments("id")
        table.string("name").notNull().unique()
        table.string("location").notNull()
        table.string("description")
        table.decimal("price", 2).notNullable();
        // table.integer("cat_id")
		// 	.references("id")
		// 	.inTable("categories")
		// 	.onDelete("SET NULL")
		// 	.onUpdate("CASCADE")
	})

	await knex.schema.createTable("users_items", (table) => {
		table.integer("user_id")
			.references("id")
			.inTable("users")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
		table.integer("item_id")
			.references("id")
			.inTable("items")
			.onDelete("SET NULL")
			.onUpdate("CASCADE")
		table.primary(["user_id", "item_id"])
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("users_items")
	await knex.schema.dropTableIfExists("items")
	// await knex.schema.dropTableIfExists("categories")
	await knex.schema.dropTableIfExists("users")
}