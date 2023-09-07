import './styles.css'
import AddVideoForm from '../AddVideoForm'

const FormsSection = (props) => {
    const { coworkerRegistration, createGender, like, gender } = props;

    return <section className='formSection'>
        <AddVideoForm
            coworkerRegistration={coworkerRegistration}
            createGender={createGender}
            gender={gender}
        />
        {/* <AddGenderSectionForm

        /> */}
    </section>

}

export default FormsSection