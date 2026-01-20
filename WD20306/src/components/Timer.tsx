import React, { useEffect, useState } from 'react'
import Button from './Button';

function Timer() {
  const [time, setTime] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false)

  useEffect(()=>{
    let timerId: any;

    if(status){
      timerId = window.setInterval(()=>{
        setTime((prev)=> prev+1)
      },1000)
    }

    // dọn dẹp sau khi component unmount
    return () => clearInterval(timerId)
  },[status])

  return (
    <div>
      <h1>Time: {time}</h1>
      <Button color='blue' onClick={()=>{setStatus(true)}}>Start</Button>
      <Button color='yellow' onClick={()=>{setStatus(false)}}>Stop</Button>
      <Button color='red' onClick={()=>{setTime(0)}}>Reset</Button>
    </div>
  )
}

export default Timer