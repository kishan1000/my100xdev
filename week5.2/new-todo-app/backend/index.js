
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);

    if (!parsedPayload.success) {
        console.log(payload, req.body.title);
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    // put it in mongodb
    // console.log(parsedPayload)
    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    });

    res.json({
        msg: "Todo is created"
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});

    res.json(todos);
})

app.put("/completed", async (req, res) => {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong input(s)"
        });
    }

    console.log(parsedPayload);

    await todo.findOneAndUpdate({
        _id: parsedPayload.data._id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo Updated"
    })
})

app.listen(3000);