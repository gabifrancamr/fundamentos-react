import { useState } from "react"

export default function UseGameCollection() {
    const [games, setGames] = useState(() => {
        const allGames = localStorage.getItem("games")
        if(!allGames) {
          return []
        } else {
          return JSON.parse(allGames)
        }
      })
      
    
      function addGame({title, cover}) {
        const id = Math.floor(Math.random() * 100)
        const game = {id, title, cover}
        setGames(state => {
          const newGame = [...state, game]
          localStorage.setItem("games", JSON.stringify(newGame))
          return newGame
        })
      }
    
      function removeGame(id) {
        setGames(state => { 
          const newGame = state.filter(game => game.id !== id)
          localStorage.setItem("games", JSON.stringify(newGame))
          return newGame
        })
      }
      
    return {games, addGame, removeGame}
}