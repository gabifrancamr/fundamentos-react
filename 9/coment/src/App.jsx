import { useState } from "react"

function App() {
  const [todosComentarios, setTodosComentarios] = useState(() => {
    const comentSalvos = localStorage.getItem("coment")
    if(!comentSalvos) {
      return []
    } else {
      return JSON.parse(comentSalvos)
    }
  })
  const [email, setEmail] = useState("")
  const [comentario, setComentario] = useState("")


  function addComentario({email, comentario}) {
    const id = Math.floor(Math.random() * 100)
    const date = new Date()
    const comentarioCompleto = {id, email, comentario, date}
    setTodosComentarios(state => {
      const comentSalvos = [...state, comentarioCompleto]
      localStorage.setItem("coment", JSON.stringify(comentSalvos))
      return comentSalvos
    })
  }

  function removerComentario(id) {
    setTodosComentarios(state => {
      const comentSalvos = state.filter(comentarioCompleto => comentarioCompleto.id !== id)
      localStorage.setItem("coment", JSON.stringify(comentSalvos))
      return comentSalvos
    })
  }

  function handleComentario(e) {
    e.preventDefault()
    addComentario({email, comentario})
    setEmail("")
    setComentario("")
  }

  return (
    <div className="content">
    <h2>Seção de comentários</h2>
      <form onSubmit={handleComentario}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="comentario">
          <label htmlFor="comentario">Comentário</label>
          <textarea 
            name="comentario" 
            id="comentario" 
            cols="50" 
            rows="8" 
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>

        <button type="submit">Enviar Comentário</button>
      </form>
      <hr/>

      <div className="todosComentarios">
        {todosComentarios.length > 0 ? (todosComentarios.map(coment => (
          <div key={coment.id}>
            <p className="comentEmail">{coment.email}</p>
            <span>Em {coment.date.toLocaleString()}</span>
            <p>{coment.comentario}</p>
            <button onClick={() => removerComentario(coment.id)}>apagar comentário</button>
          </div>
        ))) : (
          <h2>Seja o primeiro a comentar!</h2>
        )}
      </div>


    </div>
  )
}

export default App
