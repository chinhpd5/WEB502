import React, { useState } from 'react'
import Button from './Button'

function UseState() {

  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('abc')

  return (
    <div>
      <div className='border rounded p-4 m-4'>
        <h1>Count: {count}</h1>
        <Button onClick={()=>{
          setCount((prev) => prev+1)
          setCount((prev) => prev+1)
          setCount((prev) => prev+1)
          }}>Tăng</Button>
        <Button color='red' onClick={()=>{setCount(count-1)}}>Giảm</Button>
        <Button color='yellow' onClick={()=>{setCount(0)}}>Reset</Button>
      </div>

      <div className='border rounded p-4 m-4'>
          {/* two-way binding */}
          <h1>{text}</h1>
          <input className='border' type="text" 
            onChange={(e)=>{setText(e.target.value)}} 
            value={text}
          />
      </div>
    </div>
  )
}

export default UseState