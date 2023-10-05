import PropTypes from 'prop-types'

NewInput.propTypes = {
    id: PropTypes.string, 
    label: PropTypes.string, 
    value: PropTypes.string, 
    setValue:  PropTypes.func, 
}

export default function NewInput({id, label, value, setValue}) {
    return (
        <div className={id}>
          <label htmlFor={id}>{label}</label>
          <input 
            type="text" 
            id={id} 
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
    )
}