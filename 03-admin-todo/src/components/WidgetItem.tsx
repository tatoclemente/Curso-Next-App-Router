import React from 'react'

interface Props {
  title: string;
  children: React.ReactNode;
}

export const WidgetItem = ({ title, children }: Props) => {
  return (
    <div className="md:col-span-2 lg:col-span-1" >
      <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
        <h5 className="text-xl text-gray-600 text-center">{ title }</h5>
        <div className='flex flex-col'>
          {children}
        </div>
      </div>
    </div>
  )
}
