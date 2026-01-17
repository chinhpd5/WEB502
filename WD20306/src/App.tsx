// import Tailwind from "./components/Tailwind"
import Button from "./components/Button"
import ShowInfo from "./components/ShowInfo"

function App() {

  const handleClick= ():void => {
    console.log("Click!!!");
  }

  return (
    <>
      {/* <Tailwind/> */}
      {/* <ShowInfo name="chinhpd5" age={30} major="Công nghệ thông tin"/>
      <ShowInfo name="Nguyễn Văn A" age={21} major="Marketing" /> */}

      <Button onClick={handleClick} color="red">Click me</Button>
      <Button color="blue">Click me</Button>
      <Button color="green">Click me</Button>
      <Button color="yellow">Click me</Button>
    </>
  )
}

export default App
