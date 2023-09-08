import { useState } from 'react';
import './styles.css'

const FormInput = (props) => {
    const [value, setValue] = useState('');
    const placeholderMod = `${props.placeholder}...`;
    const { type = 'text', title } = props;

    const inputValueChange = (e) => {
        props.setValue(e.target.value)

    }
    return <div className='form-input color-input'>
        <label for={title}>{title}</label>
        <input
            placeholder={placeholderMod}
            required
            value={props.value}
            onChange={inputValueChange}
            type={type}
            id={title}
        />

    </div>
}

export default FormInput