import React from 'react';
import './styles.css';
import Carrousell from '../Carrousell';

const GenderSection = (props) => {
    const { genderData } = props;
    const { title } = genderData
    return (
        <section className="genderSection">
            <h2>{title}</h2>
            <Carrousell
                concerts={props.concerts}
            />
        </section>
    );
};

export default GenderSection;
