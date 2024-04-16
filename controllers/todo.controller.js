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


