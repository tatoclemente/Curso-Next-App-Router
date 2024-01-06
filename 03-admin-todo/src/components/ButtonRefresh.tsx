'use client'
import { IoRefresh } from 'react-icons/io5'
import * as todosApi from '@/todos/helpers/todos';
import { useRouter } from 'next/navigation';

export const ButtonRefresh = () => {
    const router = useRouter()
    
  const getSeedTodos = async () => {
    await todosApi.seedTodos();
    router.refresh();
  }
  return (
    <button className='flex items-center justify-center gap-2 mr-2 bg-blue-400 hover:bg-blue-500 p-2 rounded-xl text-white transition-all' onClick={ getSeedTodos }>
        <span>Seed</span>
        <IoRefresh />
    </button>
  )
}
