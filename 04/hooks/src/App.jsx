import './App.css'
import useCounter from './hooks/useCounter'

//Regra 1: Onde usar os Hooks? Dentro de uma função de um componente React
//Regra 2: Ordem dos Hook? No topo das funções

function App() {
  const counter = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
