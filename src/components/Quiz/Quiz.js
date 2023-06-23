import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

const Quiz = () => {
    const quizes = useLoaderData();
    console.log(quizes.data)
    // const {logo} = quizes.data;
    // console.log(question)
    return (
        <div className='quiz-wrapper'>
            <div className="quiz-img">
                <img src={quizes.data.logo} alt="" />
            </div>
            <div className="quiz">
                <h3>All quiz here:{quizes.data.questions.length}</h3>
                {
                quizes.data.questions.map(qs=><Questions
                    key={qs.id}
                    qs={qs}
                ></Questions>)  
                }
            </div>
        </div>
    );
};

export default Quiz;