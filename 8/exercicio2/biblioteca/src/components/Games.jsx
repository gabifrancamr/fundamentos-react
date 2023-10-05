import Protypes from 'prop-types'

Games.propTypes = {
    cover: Protypes.string,
    title: Protypes.string,
    id: Protypes.string,
    removeGame: Protypes.func
}

export default function Games({cover, title, removeGame}) {
    return (
        <div>
            <img src={cover} alt="banner do game"/>
            <div>
              <h2>{title}</h2>
              <button onClick={removeGame}>Apagar</button>
            </div>
        </div>
    )
}