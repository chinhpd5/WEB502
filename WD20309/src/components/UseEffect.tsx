import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [text, setText] = useState<string>('')

  // callback được gọi mỗi khi componet re-render
  useEffect(()=>{
    console.log('re-render');
    document.title = text;
  })

  // callback chỉ gọi 1 lần duy nhất khi component render
  useEffect(()=>{
    console.log('re-render2');
  },[])

  return (
    <div>
      <input type="text" className='border' onChange={(e)=>{
        setText(e.target.value)
      }} value={text}/>
    </div>
  )
}

export default UseEffect