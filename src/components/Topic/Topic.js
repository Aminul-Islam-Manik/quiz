import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Topic = ({topic}) => {
    console.log(topic)
    return (
        <div className='topic'>
            <img src={topic.logo} alt="" />
            <div className="category-bottom">
                <h4>{topic.name}</h4>
                <div className="icon">
                <Link to={`/topic/${topic.id}`}>Let's Start<FontAwesomeIcon icon={faArrowRightLong} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;