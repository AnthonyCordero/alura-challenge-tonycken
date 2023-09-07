import './styles.css'

const FormButton = (props) => {
    return <button
        className='formButton'>{props.children}
    </button>
}

export default FormButton