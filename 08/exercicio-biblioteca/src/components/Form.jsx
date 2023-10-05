import { useState } from "react"
import PropTypes from 'prop-types'
import NewInputForm from "./newInputForm"

Form.propTypes = {
    addGame: PropTypes.func
}

export default function Form({addGame}) {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        addGame({title, cover})
        setTitle("")
        setCover("")
        
      }
    return (
        <form onSubmit={handleSubmit}>
            <NewInputForm
                id="title"
                label="Título"
                value={title}
                setValue={setTitle}
            />

            <NewInputForm
                id="cover"
                label="Capa:"
                value={cover}
                setValue={setCover}
            />

            <button type="submit">Enviar!</button>
        
        </form>
    )
}