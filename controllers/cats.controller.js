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
