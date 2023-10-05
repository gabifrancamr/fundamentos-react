import PropTypes from 'prop-types'

NewInputForm.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}


export default function NewInputForm({id, label, value, setValue}) {
    return (
        <div>
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