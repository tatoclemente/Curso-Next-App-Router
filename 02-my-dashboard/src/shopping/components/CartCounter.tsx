'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'
import React, { useEffect, useState } from 'react'


// interface Props {
//   value?: number
// }

export interface CounterResponse {
  method: string,
  count: number
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then( res => res.json() )
  console.log({ data });
  return data
}


export const CartCounter = () => {
  
  const count = useAppSelector( state => state.counter.count)
  
  const dispatch = useAppDispatch()
  // const [counter, setCounter] = useState(value | 0)
  
  useEffect(() => {
    getApiCounter()
      .then( ({ count }) => dispatch(initCounterState(count) ) )
  }, [dispatch])

  // useEffect(() => {
  //     dispatch(initCounterState(value))
  //   }, [ dispatch, value ])
  return (
    <>
       <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch( addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] me-2">
          +1
        </button>
        <button 
          onClick={() => dispatch( substractOne() )}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] me-2">
          -1
        </button>
      </div>
    </>
  )
}
