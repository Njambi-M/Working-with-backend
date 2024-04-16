const express = require('express');
const router = express.Router();
const todoController = require("./todo.controller");

router.post('/', todoController.createTodo);
router.get('/', todoController.readTodos);

module.exports = router;
