const mongoose =  require("mongoose");

mongoose.connect("mongodb+srv://100xDev:6NM78oBHbM594Vvv@cluster0.fvy2g.mongodb.net/week5_2");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}