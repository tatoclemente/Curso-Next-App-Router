'use client'

import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useState } from "react"

// https://tailwindcomponents.com/component/radio-buttons-1



interface Props {
  currentTab? : number,
  tabOptions : number[]
}

export const TabBar = ({ tabOptions, currentTab = 1 }: Props) => {

  const router = useRouter()

  const [selected, setSelected] = useState(currentTab)

  const onTabSelected = ( tab: number ) => {
    setSelected( tab )
    setCookie('selectedTab', tab.toString())
    router.refresh()
  }

  return (
    <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-4`}>
      {
        tabOptions.map((tab, index) => (
        <div key={index}>
          <input
            checked={ selected === tab } 
            onChange={() => {}}
            type="radio" 
            id="1" 
            className="peer hidden" />
          <label
          onClick={() => onTabSelected(tab)} 
            className=" transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
              { tab }
          </label>
        </div>
      ))}
    </div>
  )
}