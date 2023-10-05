import Header from "./Header"
import Component from "./Component"
import userContext from "./UserContext"

function App() {
  const user = {
    name: "João",
    email: "joao@email.com"
  }

  return (
    <>
      <userContext.Provider value={user}>
          <Header/>
          <Component />
      </userContext.Provider>
      
    </>
  )
}

export default App
