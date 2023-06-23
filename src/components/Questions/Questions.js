import React from 'react';
import Options from '../Options/Options';

const Questions = ({qs}) => {
    const {question, options} = qs;
    console.log(qs)
    return (
        <div className='questions'>
            <h4>{question}</h4>
            <Options options={options}></Options>
        </div>
    );
};

export default Questions;