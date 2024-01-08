import { WidgetItem } from '@/components'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {

  const sesion = await getServerSession(authOptions)

  if ( !sesion ) {
    redirect('/api/auth/signin')
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            
    {/* TODO: src/components <WidgetItem /> */}
    <WidgetItem title='Usurio conectado S-side'>
      <div className='flex flex-col'>
        <span>{ sesion.user?.name }</span>
        <span>{ sesion.user?.image }</span>
        <span>{ sesion.user?.email }</span>
      </div>

      <div>
        {JSON.stringify(sesion)}
      </div>
    </WidgetItem>
    {/* TODO: Fin <WidgetItem /> */}

  </div>
  )
}
