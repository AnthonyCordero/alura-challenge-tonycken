import './styles.css'

const GenderOption = (props) => {

    const selectChange = (e) => {
        props.setGender(e.target.value)
    }

    return <div className='gender-option' >
        <label>Gender</label>
        <select value={props.title} onChange={selectChange}>
            <option value='' disbled defaultValue='' hidden>Seleccionar Equipo</option>
            {props.genderInfo.map((title, index) => <option className='genderOptionColapsable' key={index} value={title}>{title}
            </option>
            )}
        </select>
    </div >
}

export default GenderOption