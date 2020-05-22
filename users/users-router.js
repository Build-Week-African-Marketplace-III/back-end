const express = require('express');
const users = require("../users/users-model")
const restrict = require("../middleware/restrict")

const router = express.Router()
// This endpoint is only available to logged-in users due to the `restrict` middleware
router.get("/users", restrict(), async (req, res, next) => {
	try {
		res.json(await users.find())
	} catch(err) {
		next(err)
	}
})
module.exports = router