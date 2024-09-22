const zod = require("zod");

/*
    post /todos
    {
        title: string,
        description: string,
    }

    put /completed
    {
        id: string,
    }
*/

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    _id : zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}