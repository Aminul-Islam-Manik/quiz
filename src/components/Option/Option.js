import React from 'react';
import './Option.css'

const Option = ({option, handleAnswerClick}) => {
    // console.log(option)
    return (
        <div className='option' onClick={()=>handleAnswerClick(option)}>
            <input type="radio" />
            <p>{option}</p>
        </div>
    );
};

export default Option;