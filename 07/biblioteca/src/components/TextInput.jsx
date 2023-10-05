import PropTypes from 'prop-types'

TextInput.propTypes = {
    setValue: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string
}

export default function TextInput({setValue, value, label, id}) {
    return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input 
            type='text'
            name={id}
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
    )
}