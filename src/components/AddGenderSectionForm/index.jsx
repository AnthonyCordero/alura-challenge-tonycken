import { useState } from 'react'
import './styles.css'
import FormInput from '../FormInput'
import FormButton from '../FormButton'

const AddGenderSectionForm = (props) => {
    const { createGender, genderInfo } = props
    const [title, updateTitle] = useState('')
    const [color, updateColor] = useState('')

    const sendNewGenderData = (e) => {
        e.preventDefault();
        createGender({ title, primaryColor: color });
    }

    const createGenderPassword = 'Hello'

    return <article
        style={{ backgroundImage: 'url(/img/create-gender-formbg.png)' }} className='addNewGenderSectiontForm'>

        <form
            onSubmit={sendNewGenderData}>

            <h2>Add a New Music Gender!</h2>
            <FormInput
                title='Music Gender Name'
                placeholder='Type a gender name'
                required
                value={title}
                setValue={updateTitle} />
            <FormInput
                type='color'
                title='Color'
                required
                value={color}
                setValue={updateColor} />
            <FormInput
                title='Securiry code'
                placeholder='Type the password'
                required
                value={createGenderPassword}
            />
            <FormButton>
                Create New Music Gender!
            </FormButton>
        </form>
    </article>



}

export default AddGenderSectionForm