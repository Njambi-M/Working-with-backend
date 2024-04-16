const express = require('express')
const router = express.Router()
const catController = require("../controllers/cats.controller")


router.post('/cats/:name', catController.create);
router.get('/cats', catController.read);
router.delete('/cats/:name', catController.delete);
router.put('/cats/:oldName/:newName', catController.update);

module.exports = router