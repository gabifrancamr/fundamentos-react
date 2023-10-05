import PropTypes from 'prop-types'

Game.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    removeGame: PropTypes.func
}

export default function Game({cover, title, removeGame}) {
    return (
        <div>
            <img src={cover} alt="Banner do Jogo" />
            <div className="infoGame">
              <h2>{title}</h2>
              <button onClick={removeGame}>Apagar</button>
            </div>
            
          </div>
    )
}