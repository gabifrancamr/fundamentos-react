import Games from "./components/Games"
import Form from "./components/Form"
import UseGameCollection from "./hooks/UseGameCollection"

function App() {
  const {games, addGame, removeGame} = UseGameCollection()

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <Form addGame={addGame}/>

      <div className="games">
        {games.length > 0 ? (games.map(game => (
          <Games 
            key={game.id}
            title={game.title}
            cover={game.cover}
            removeGame={() => removeGame(game.id)}
          />
        ))) : (
          <h2>Não há jogos adicionados</h2>
        )}
      </div>
      
    </div>
  )
}

export default App
