import './styles.css'
import AddVideoForm from '../AddVideoForm'
import AddGenderSectionForm from '../AddGenderSectionForm';

const FormsSection = (props) => {

    const { concertRegistration, createGender, genderInfo } = props;

    return <section className='formSection'>
        <AddVideoForm
            concertRegistration={concertRegistration}

            genderInfo={genderInfo}
        />
        <AddGenderSectionForm
            createGender={createGender}
            genderInfo={genderInfo}
        />
    </section>

}

export default FormsSection