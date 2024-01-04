import prisma from "@/lib/prisma";
import { TodoGrid } from "@/todos";

export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

const RestTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  
  return (
    <div>
      <TodoGrid todos={ todos } />
    </div>
  )
}

export default RestTodosPage