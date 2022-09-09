import React, { useRef } from 'react';
import './SubForm.css';

export default function Allergies(props) {

    const preventFunc = (e) => {
        e.preventDefault();

        const styleData = {
            allergies: []
        }
        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                styleData.allergies.push(checkbox.value)
            }
        })

        props.modifyIndex(5, styleData)
    }

    const allCheckboxes = useRef([]);


    const handleReturn = () => {
        props.modifyIndex(3);
    }

    const addCheck = el => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el);
        }
    }


    return (
        <form
            className='checkbox-form'

            onSubmit={preventFunc}>
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiples.</span>

            <label htmlFor='milk'>Lait</label>
            <input ref={addCheck} type="checkbox" id="milk" value="milk" />

            <label htmlFor='pollen'>Pollen</label>
            <input ref={addCheck} type="checkbox" id="pollen" value="pollen" />

            <label htmlFor='nuts'>Noix</label>
            <input ref={addCheck} type="checkbox" id="nuts" value="nuts" />

            <label htmlFor='eggs'>Oeufs</label>
            <input ref={addCheck} type="checkbox" id="eggs" value="eggs" />

            <label htmlFor='shellfish'>Fruits de mers</label>
            <input ref={addCheck} type="checkbox" id="shellfish" value="shellfish" />

            <div className='container-nav-btns'>
                <button type="button" className='prev' onClick={handleReturn}>Précédent</button>
                <button>Valider</button>
            </div>

        </form>
    )
}