import React, { useState } from 'react'
import Button from './Button'

function UseState() {

  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={()=>{setCount(count+1)}}>Tăng</Button>
      <Button color='red' onClick={()=>{setCount(count-1)}}>Giảm</Button>
      <Button color='yellow' onClick={()=>{setCount(0)}}>Reset</Button>
    </div>
  )
}

export default UseState