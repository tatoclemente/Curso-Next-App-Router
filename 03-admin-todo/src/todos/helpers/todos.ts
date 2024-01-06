import { Todo } from '@prisma/client';


const sleep = (seconds: number = 0): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}

export const updateTodos = async ( id: string, complete: boolean ): Promise<Todo> => {
    // await sleep(2)
    const body = { complete }

    const todo = await fetch(`/api/todo/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }).then( res => res.json() )

    console.log(todo);
    
    return todo

}

export const createTodos = async ( description: string ): Promise<Todo> => {
    const body = { description }

    const todo = await fetch('/api/todo', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }).then( res => res.json() )

    console.log({ todo });
    
    return todo

}

export const deleteCompletedTodos = async () => {

    const todo = await fetch(`/api/todo`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }).then( res => res.json() )

    console.log({ todo });
    
    return todo

}

export const seedTodos = async (): Promise<Todo[]> => {
    const todos = await fetch('/api/seed').then( res => res.json() )
    return todos;
}