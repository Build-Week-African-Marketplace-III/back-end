// require('dotenv').config();
const bcrypt = require('bcryptjs');
const express = require("express");
const router = express.Router();
const db = require('../users/users-model');
const jwt = require('jsonwebtoken');

router.post("/register", async (req, res, next) => {
	try {
		const { email } = req.body
		const user = db.findBy({ email }).first()

		if (user.email) {
			return res.status(400).json({
				message: "email is already taken",
			})
		}
		res.status(201).json(db.add(req.body))
	} catch(err) {
		next(err)
	}
})

router.post("/login", async (req, res, next) => {
  const authError = {
    message: "You shall not pass !"
  }
  try {
    const user = await db.findBy({ email: req.body.email }).first()
    if (!user) {
      return res.status(401).json({message: `user not found`})
    }

    const passwordValid = await bcrypt.compare(req.body.password, user.password)
    if (!passwordValid) {
      return res.status(401).json(authError)
    }
    const token = generateToken(user);
    // this sends the token back as a cookie instead of in
    // the request body, so the client will automatically
    // save it in its cookie jar.
    res.cookie("token", token);

		res.json({
			message: `Welcome ${user.name}!`,
		})
	} catch(err) {
		next(err)
	}
})

function generateToken(user) {
  const payload = {
    userId: user.id,
    userRole: "regular",  // this would normally come from the database
  }
  const tokenSecret = process.env.TOKEN_SECRET || "hk3g$gi%sh!0h*dh.^kdh";
  
  return jwt.sign(payload, tokenSecret);
}
module.exports = router;