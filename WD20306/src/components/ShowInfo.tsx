import React from 'react'

type PropsType = {
  name: string,
  age: number,
  major: string
}

function ShowInfo(props: PropsType) {

  console.log(props);
  
  return (
    <div className='border rounded p-4 m-4'>
      <h1>Họ và tên: {props.name}</h1>
      <h2>Tuổi: {props.age}</h2>
      <h3>Khoa: {props.major}</h3>
    </div>
  )
}

export default ShowInfo