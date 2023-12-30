import { Todo } from "./types";


export const getAlltodos = async (): Promise<Todo[]> => {
    const res = await fetch('http://localhost:3001/tasks', { cache: "no-store" })
    const todos = res.json();

    return todos
}

export const addTodo = async (todo: Todo): Promise<Todo> => {
    const res = await fetch('http://localhost:3001/tasks', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    const newTodo = res.json();
    return newTodo
}