const bcrypt = require("bcryptjs")
const db = require("../data/config");

async function add(user) {
	// hash the password with a time complexity of 14
	user.password = await bcrypt.hash(user.password, 14)

	const [id] = await db("users").insert(user)
	return findById(id)
}

async function addItem(item) {
	const [id] = await db("items").insert(item)
    return findItemById(id);
}


function find() {
	return db("users").select("id", "name")
}


function findItems() {
    return db("items")
    .select("id", "name", "description", "price", "location")
}


function findBy(email) {
	return db("users")
		.select("id", "email", "password")
		.where(email)
}


function findById(id) {
	return db("users")
		.select("id", "email")
		.where({ id })
		.first()
}
function findItemById(id) {
	return db("items")
		.select("id", "name")
		.where({ id })
		.first()
}

module.exports = {
    add,
    addItem,
    find,
    findItems,
	findBy,
	findById,
}