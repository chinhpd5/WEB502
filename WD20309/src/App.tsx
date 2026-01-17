import ShowInfo from "./components/ShowInfo"

function App() {

  return (
   <>
    <ShowInfo name="chinhpd5" age={20} gender={true} major="cntt"/>
    <ShowInfo name="chinhpd6" age={30} gender={false} />
   </>
  )
}

export default App
