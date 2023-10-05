import { useState } from "react"
import PropTypes from 'prop-types'
import NewInput from "./NewInut"

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
        <NewInput
            id="title"
            label="Título: "
            value={title}
            setValue={setTitle}
        />

        <NewInput
            id="cover"
            label="Cover: "
            value={cover}
            setValue={setCover}
        />
        
        <button type="submit">Adicionar</button>
      </form>
    )
}