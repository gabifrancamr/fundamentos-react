import Game from "./components/Game"
import Form from "./components/Form"
import { UseGameCollection } from "./Hooks/UseGameCollection"

function App() {
  const {games, addGame, removeGame} = UseGameCollection()

  return (
    <div className="formCointainer">
    <h1>Biblioteca de Jogos</h1>
      <Form addGame={addGame}/>
      <div className="games">
        {games.length > 0 ? (games.map((game) => (
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            removeGame={() => removeGame(game.id)}
          />
        ))): (
          <h2>Parece que não foi adicionado nenhum jogo aqui</h2>
        )}
      </div> 
    </div>
  )
}

export default App
