import UserContext from "./contexts/UserContext"

import Container from "./components/Container"
import Header from "./components/Header"

function App() {
  const user = {
    name: "João",
    email: "joao@email.com"
  }
  return (
    <>
      <UserContext.Provider value={user}>
        <Header/>
        <h1>Usando Contexto</h1>
        <Container/>
        
      </UserContext.Provider>

      <div>

      </div>
    </>
    
  )
}

export default App
