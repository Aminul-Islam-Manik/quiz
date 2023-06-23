import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    console.log(topic)
    return (
        <div className='topic'>
            <img src={topic.logo} alt="" />
            <h4>{topic.name}</h4>
            <Link to={`/topic/${topic.id}`}>Let's Start</Link>
            {/* <button>Let's start</button> */}
        </div>
    );
};

export default Topic;