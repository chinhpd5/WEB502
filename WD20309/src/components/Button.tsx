import React from 'react'

type PropsType = {
  children: React.ReactNode,
  color?: string,
  onClick?: () => void
}

const renderColor = (color: string='blue'):string => {
  switch (color) {
    case 'red':
      return `bg-red-500 hover:bg-red-600`
    case 'blue':
      return `bg-blue-500 hover:bg-blue-600`
    case 'green':
      return `bg-green-500 hover:bg-green-600`
    case 'yellow':
      return `bg-yellow-500 hover:bg-yellow-600`
    default:
      return `bg-blue-500 hover:bg-blue-600`
  }
}

function Button(props: PropsType) {
  return (
    <button onClick={props.onClick} className={`${renderColor(props.color)} px-4 py-2 rounded text-white  min-w-20 cursor-pointer`}>
      {props.children}
    </button>
  )
}

export default Button