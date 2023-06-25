import React from 'react';
import './Option.css'

const Option = ({option, handleAnswerClick}) => {
    // console.log(option)
    return (
        <div className='option'>
            <p onClick={()=>handleAnswerClick(option)}>{option}</p>
        </div>
    );
};

export default Option;