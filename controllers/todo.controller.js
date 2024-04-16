let todos = [];

exports.createTodo = (req, res) => {
  const { title, priority } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    priority,
    createdAt: new Date(),
    done: false,
    doneAt: null
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

exports.readTodos = (req, res) => {
  res.json(todos);
};

exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, priority, done } = req.body;
  let todo = todos.find(todo => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: 'TODO not found' });
  }
  todo.title = title;
  todo.priority = priority;
  todo.done = done;
  if (done) {
    todo.doneAt = new Date();
  } else {
    todo.doneAt = null;
  }
  res.json(todo);
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'TODO not found' });
  }
  todos.splice(index, 1);
  res.sendStatus(204);
};




