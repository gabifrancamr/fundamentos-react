import { useState } from "react"

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const allGames = localStorage.getItem("games-lib")
        if(!allGames) {
          return []
        } else {
          return JSON.parse(allGames)
        }
      })
      
      function addGame({title, cover}) {
        const id = Math.floor(Math.random() * 1000000)
        const game = {title, cover, id}
    
        setGames(state => {
          const saveGames = [...state, game]
          localStorage.setItem("games-lib", JSON.stringify(saveGames))
          return saveGames
        })
      }
    
      function removeGame(id) {
        setGames(state => {
          const saveGames = state.filter((game) => game.id !== id)
          localStorage.setItem("games-lib", JSON.stringify(saveGames))
          return saveGames
        })
      }

      return {games, addGame, removeGame}
}