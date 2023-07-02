import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();

    return (
        <div className='topics'>
            <h3>Quizzes are captivating assessments that combine learning with entertainment They provide an interactive and dynamic way to engage participants, evaluate comprehension , and faster deeper understanding of various subjects.<br/>So why late pls start now</h3>

            <h1>Choose Your Category</h1>
            
            <div className="topics">
                {
                    topics.data.map(topic=><Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;