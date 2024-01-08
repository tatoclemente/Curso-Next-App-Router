export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from "@/lib/prisma";

import { getUserServerSession } from "@/auth/auth-actions";
import { NewTodo, TodoGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

const ServerTodosPage = async () => {

  const user = await getUserServerSession()

  if ( !user ) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({ 
    where: { userId: user.id },
    orderBy: { description: 'asc' } 
  })

  
  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodoGrid todos={ todos } />
    </>
  )
}

export default ServerTodosPage