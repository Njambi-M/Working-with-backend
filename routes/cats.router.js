const express = require('express')
const router = express.Router()
const catController = require("../controllers/cats.controller")


router.post('/add/:name', catController.create);
router.get('/', catController.read);
router.delete('/cats', catController.delete);
router.put('/cats/:oldName/:newName', catController.update);

module.exports = router