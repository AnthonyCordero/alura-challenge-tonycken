import React from 'react';
import './styles.css';
import AddVideoForm from '../AddVideoForm';
import AddGenderSectionForm from '../AddGenderSectionForm';
import Button from '../Button';

const SHFormSectionButtonColor = '#000000';

const FormsSection = (props) => {
    const {
        concertRegistration,
        createGender,
        genderInfo,
        toggleForm,
        showVideoForm,
    } = props;

    return (
        <section className='formSection'>
            <Button
                onClick={toggleForm}
                btnColor={SHFormSectionButtonColor}
                btnText={showVideoForm ? 'Show Gender Form' : 'Show Video Form'}
            />

            {
                showVideoForm ? (
                    <AddVideoForm
                        concertRegistration={concertRegistration}
                        genderInfo={genderInfo}
                    />
                ) : (
                    <AddGenderSectionForm
                        createGender={createGender}
                        genderInfo={genderInfo}
                    />
                )}
        </section>
    );
};

export default FormsSection;
