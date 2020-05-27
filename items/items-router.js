const express = require('express');
const users = require("../users/users-model")
const restrict = require("../middleware/restrict")
const router = express.Router()

// This endpoint is only available to logged-in
//users due to the`restrict` middleware

router.get("/items", async (req, res, next) => {
    try {
        const data = await users.findItems();
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
})

 router.post('/items', async (req, res, next) => {
        //data validation
        const item = {
            name: req.body.name,
            location:req.body.location,
            description: req.body.description,
            price:req.body.price,
        }
        try {
            if (!item.name || !item.price) {
                res.json({ message: `item name or price missing !` })
            } else {
                const response = await users.addItem(item);
                res.status(201).json(response);
            }
        } catch (err) {
            next(err);
        }
})

module.exports = router