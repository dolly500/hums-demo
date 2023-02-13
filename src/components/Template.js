import React from 'react'
import doc from './doc.svg';
import './template.css';

const Template = ({App}) => {
    return (
        <div className='sign-wrapper'>
            <div className='left-side'>
                <img src={doc} alt='humsmedical' className='left-side-image'/>
            </div>
            <div className='right-side'>
                <App />
            </div>
        </div>
    )
}

export default Template;