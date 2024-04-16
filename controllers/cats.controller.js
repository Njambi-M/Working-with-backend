const cats = [];

exports.create = (req,res) =>{
    const { name } = req.params; 
    cats.push(name); 
    res.send("Cat created: " + name); 
};

exports.read = (req, res) => {
    res.send(cats);
};
exports.delete = (req,res) => {
    const { name } = req.params;
    const index = cats.indexOf(name);
    if (index !== -1) {
        cats.splice(index, 1);
        res.send("Deleted cat: " + name);
    } else {
        res.status(404).send("Cat not found");
    }
};
exports.update = (req, res) => {
    const { oldName, newName } = req.params;
    const index = cats.indexOf(oldName);
    if (index !== -1) {
        cats[index] = newName;
        res.send("Updated cat from " + oldName + " to " + newName);
    } else {
        res.status(404).send("Cat not found");
    }
};

