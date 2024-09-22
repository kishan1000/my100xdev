import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
            console.log(value);
        }} /> <br />
        <input type="text" placeholder="description" onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
            console.log(value);
        }} /> <br />

        <button onClick={() => {
            console.log("clicked");
            console.log({ title, description });
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({ title: title, description: description }),
                headers: { "content-type": "application/json" }
            })
        }}>Add a todo</button>
    </div>
}