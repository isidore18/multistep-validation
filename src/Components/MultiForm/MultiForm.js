import React, { useState } from 'react';
import './MultiForm.css';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';
import Allergies from './SubForms/Allergies';
import HateLove from './SubForms/HateLove';

export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setallFormData] = useState({
        dietForm: '',
        foodStyle: [],
        allergies: [],
        prefs: {}
    })

    const modifyIndex = (newIndex, data) => {
        setFormIndex(newIndex);
        if (data) {
            const newData = { ...allFormData };
            const firstPropNewData = Object.keys(data)[0];

            newData[firstPropNewData] = data[firstPropNewData];
            setallFormData(newData)
        }
    }

    const elements = [
        <CardBegin modifyIndex={modifyIndex} />,
        <DietForm modifyIndex={modifyIndex} />,
        <FoodStyle modifyIndex={modifyIndex} />,
        <Allergies modifyIndex={modifyIndex} />,
        <HateLove modifyIndex={modifyIndex} />,
        <CardEnd />
    ]

    return (
        <div className='container-multiform'>
            <Indicator formIndex={formIndex} />
            {elements.map((item, index) =>  {
                if (index+1 === formIndex) {
                    return elements[index]
                }
            })}

        </div>
    )
}
