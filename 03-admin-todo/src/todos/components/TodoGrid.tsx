"use client";

import { Todo } from "@prisma/client";
import { TodoItem } from "..";

// import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

interface TodoProps {
  todos?: Todo[];
}

export const TodoGrid = ({ todos = [] }: TodoProps) => {

  // const router = useRouter()

  // const toggleTodoUpdate = async (id: string, complete: boolean) =>{
  //   const updateTodo = await todosApi.updateTodos( id, complete );
  //   console.log(updateTodo);
    
  //   router.refresh()
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoUpdate={ toggleTodo }
        />
      ))}
    </div>
  );
};
