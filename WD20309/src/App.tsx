import Button from "./components/Button"

function App() {

  const handleClick = ():void => {
    console.log("Click!!!!");
    
  }

  return (
   <>
    <Button onClick={handleClick} color="red">Đỏ</Button>
    <Button color="blue">Xanh dương</Button>
    <Button color="green">Xanh lá</Button>
    <Button color="yellow">Vàng</Button>
    <Button>Button</Button>
   </>
  )
}

export default App
