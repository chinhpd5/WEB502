import './App.css'

function ShowInfo (){

  return (
    <>
      <h1>Họ và tên: Chinhpd5</h1>
      <p>Tuổi: 20</p>
    </>

  )
}


function App() {

  return (
    <>
      <ShowInfo></ShowInfo>
      <ShowInfo/>
    </>
  )
}

export default App
