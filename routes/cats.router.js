const express = require('express')
const router = express.Router()
const catController = require("../controllers/cats.controller")


router.post('/add/:name', catController.create);
router.get('/', catController.read);

module.exports = router