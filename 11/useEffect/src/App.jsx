import { useEffect, useState } from "react"

async function fetchPokemon() { 
  const response = await fetch("https://pokeapi.co/api/v2/pokemon") //Nesta linha, estamos fazendo uma requisição HTTP para a API pública de Pokémon usando a função fetch(). A URL "https://pokeapi.co/api/v2/pokemon" é passada como argumento para a função fetch(). O await antes do fetch() indica que estamos esperando pela conclusão dessa requisição antes de continuar. A resposta da requisição é armazenada na variável response.
  const data = await response.json() //Aqui, estamos lendo o corpo da resposta da requisição HTTP como JSON. A função response.json() é assíncrona, então novamente usamos await para aguardar a conclusão dessa operação. O JSON retornado pela API é convertido em um objeto JavaScript e armazenado na variável data.
  return data.results //estamos retornando data.results. Supondo que a API da Pokémon forneça um objeto JSON com uma propriedade chamada "results", esse será o valor retornado pela função fetchPokemon().
}

export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonShown, setPokemonShown] = useState(null)

  //if(pokemon.length === 0) {
  //  fetchPokemon().then(results => {
  //    console.log(results)
  //    setPokemon(results)
  //  })
  //}

  useEffect(() => {
    fetchPokemon().then(results => {
      console.log(results)
      setPokemon(results)
    })
  }, [])

  //O useEffect é usado para executar código em resposta a mudanças no componente ou quando o componente é montado. No código que você forneceu, estamos usando o useEffect para realizar uma ação assim que o componente é montado. O segundo argumento, um array vazio ([]), significa que o efeito será executado apenas uma vez, após a montagem do componente.

  //Dentro do useEffect, estamos chamando a função fetchPokemon(), que foi explicada na resposta anterior. Essa função faz uma requisição à API de Pokémon e, quando os dados são obtidos com sucesso, o then permite que manipulemos os resultados. Neste caso, estamos usando setPokemon para atualizar o estado pokemon com os resultados da requisição, ou seja, os Pokémon obtidos da API.

  async function showDetails(url) {
    const data = await fetch(url).then(res => res.json())
    console.log("Pokemon encontrado")
    console.log(data)
    setPokemonShown(data)

  }
  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button onClick={() => showDetails(mon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>

      {pokemonShown && (
        <div>
          <h2>{pokemonShown.name}</h2>
          <img
            src={pokemonShown.sprites.front_default}
            alt=""
          />
          <div className="stat">
            <b>Tipo: </b>
            {pokemonShown.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>{pokemonShown.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>{pokemonShown.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokemonShown.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div >

    
  )
}