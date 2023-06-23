import React from 'react';
import './Option.css'

const Option = ({option}) => {
    console.log(option)
    return (
        <div className='option'>
            {/* <button type='redio'>{option}</button> */}
            <input type="radio" /><span><p>{option}</p></span>
        </div>
    );
};

export default Option;