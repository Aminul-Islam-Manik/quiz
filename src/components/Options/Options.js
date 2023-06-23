import React from 'react';
import Option from '../Option/Option';
import './Options.css';

const Options = ({options}) => {
    return (
        <div className="options">
        {
            options.map(option=><Option
            key={option.id}
            option={option}
            ></Option>)
        }
    </div>
    );
};

export default Options;