import { useState } from 'react'
import './styles.css'
import Button from '../Button'


const SHFormSectionButtonText = 'Show / Hide Formulary';
const SHFormSectionButtonColor = '#000000';

const SHFormSection = (props) => {

    const { switchShowHide } = props

    return <section className="ShowHideButonSection">
        <Button
            onClick={() => switchShowHide()}
            btnColor={SHFormSectionButtonColor}
            btnText={SHFormSectionButtonText}
        />
    </section>
}

export default SHFormSection