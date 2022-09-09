import React, { useState } from 'react';
import './SubForm.css';

export default function HateLove(props) {

    const preventFunc = e => {
        e.preventDefault();
        props.modifyIndex(6, formData)
    } 

    const [formData, setFormData] = useState({
        prefs: {
            love: '',
            hate: ''
        }
    })

    const handleTextarea = (e, pref) => {
        if (pref === 'love' ) {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    love: e.target.value
                }
            })
        } else if (pref === 'hate') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    hate: e.target.value
                }
            })
        }
    }

    const handleReturn = () => {
        props.modifyIndex(4);
    }


    return (
        <form
            className='preferences-form'
            onSubmit={preventFunc}>
            <p>Parle-nous des aliments que tu préfères et détestes !</p>
            
            <label htmlFor='prefered'>Tes aliments préférés séparés par une virgule : </label>
            <textarea id="prefered"  placeholder='un ou plusieurs, si tu en as'  onChange={e => handleTextarea(e, 'love')}/>
            
            <label htmlFor='hated' >Les aliments que tu ne supportes pas séparés par une virgule : </label>
            <textarea id="hated" placeholder='un ou plusieurs, si tu en as' onChange={e => handleTextarea(e, 'hate')} />


            <div className='container-nav-btns'>
                <button type="button" className='prev' onClick={handleReturn}>Précédent</button>
                <button onClick={() => props.modifyIndex(6, formData)}>Valider</button>
            </div>
        </form>
    )
}
