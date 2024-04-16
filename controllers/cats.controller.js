const cats = [];

exports.create = (req,res) =>{
    const { name } = req.params; 
    cats.push(name); 
    res.send("Cat created: " + name); 
};

