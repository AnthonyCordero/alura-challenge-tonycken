import { useState } from 'react'
import './styles.css'
import FormInput from '../FormInput'
import GenderOption from '../GenderOption'
import FormButton from '../FormButton'

const AddVideoForm = (props) => {
    const [bandName, setBandName] = useState('')
    const [country, setCountry] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [gender, setGender] = useState('')
    const [year, setYear] = useState('')

    const { concertRegistration, genderInfo } = props

    const sendData = (e) => {
        e.preventDefault()
        let sendData = {
            bandName,
            country,
            year,
            videoLink,
            gender
        };
        concertRegistration(sendData);
    };

    return <article
        style={{ backgroundImage: 'url(/img/create-concert-formbg.png)' }} className='addNewConcertForm'>

        <form
            onSubmit={sendData}>

            <h2>Add a New Concert!</h2>
            <FormInput
                title='Band Name'
                placeholder='Type the Band Name'
                required
                value={bandName}
                setValue={setBandName} />
            <FormInput
                title='Year'
                placeholder='Concert Year'
                required
                value={year}
                setValue={setYear} />
            <FormInput
                title='Coutry'
                placeholder='Band Country'
                required
                value={country}
                setValue={setCountry} />
            <FormInput
                title='Video Link'
                placeholder='Paste last 11 characters of the YouTube link'
                required
                value={videoLink}
                setValue={setVideoLink} />
            <GenderOption
                value={genderInfo}
                setGender={setGender}
                genderInfo={genderInfo} />
            <FormButton>
                Add The New Band Concert!
            </FormButton>
        </form>
    </article>

}


export default AddVideoForm