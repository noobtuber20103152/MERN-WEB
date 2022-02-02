const express = require('express')
const router = express.Router();
const blog = require('../BlogSchema/BSchema')
const { body, validationResult } = require('express-validator')
const fetchblog = require("../middleware/fetchblog")
router.post('/blogcontent', fetchblog, [
    body('name', 'Username is required').isLength({ min: 1 }),
    body('description', 'length should be 5').isLength({ min: 5 })
], async (req, res) => {
    try {
        // console.log(req)
        const { name, email, title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        // console.log(name, email, title, description, tag);
        const blogcontent = new blog({
            name, email, title, description, tag
        });
        const saveBlog = await blogcontent.save();
        res.json(saveBlog);
    } catch (error) {
        console.log(error.message)
        console.log("Try catch error in content.js file")
        res.status(500).send("Internals sServer Errors")
    }
})

router.get('/story', async (req, res) => {
    try {
        const story = await blog.find();
        res.send(story)

    } catch (error) {
        console.log("Error in fetch all story")
        res.status(501).send({ error: "Error in fetching stories" })
    }
})
module.exports = router;