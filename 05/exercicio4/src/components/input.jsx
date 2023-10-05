import PropTypes from 'prop-types'

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func,
    showInput: PropTypes.bool
}

export default function Input(props) {
    return (
        <>
        <input 
            type="number" 
            id="passwordSize" 
            min={1}
            value={props.showInput ? props.passwordSize : 8}
            onChange={(ev) => props.setPasswordSize(+ev.target.value)}
        />
        </>
    )
}