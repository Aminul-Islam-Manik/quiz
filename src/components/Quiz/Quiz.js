import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Quiz = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data)

    const allQuizes = quizes.data.questions;
    console.log(allQuizes)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(1);
    const [result, setResult] = useState(0);

    const handleAnswerOptionClick = () => {


        if(score < quizes.data.questions.length){
            const newScore = score + 1;
            setScore(newScore);
        }



		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < allQuizes.length) {
			setCurrentQuestion(nextQuestion);
		} 
	};


    const handleAnswerClick=(option)=>{

        const selectedAnswer = option;
        // console.log(selectedAnswer)
        if(selectedAnswer===allQuizes[currentQuestion].correctAnswer){
            const newResult = result + 5;
            setResult(newResult);
        }
        else{
            alert('this is wrong')
        }
    }

    return (
        <div className='quiz-wrapper'>
            <div className="quiz-img">
                <img src={quizes.data.logo} alt="" />
            </div>
            <div className="quiz-container">
                <div className="result">
                    <h2>Total Quiz-{score}/{quizes.data.questions.length}</h2>
                    <h2>Result:{result}</h2>
                </div>
                <div className="question">
                        {/* //show the correct answer
                        {allQuizes[currentQuestion].correctAnswer} */}

                        <h2>Quiz No-{score}</h2>
                        <h3>{allQuizes[currentQuestion].question}</h3>

                        {
                            allQuizes[currentQuestion].options.map(option=><Option key={option.idx} option={option} handleAnswerClick={handleAnswerClick}></Option>)
                        }
                    </div>
                <div className="btn-quiz">
                    <button className="btn" onClick={()=>handleAnswerOptionClick()}>Previous<FontAwesomeIcon icon={faArrowRightLong} /></button>
                    <button className="btn" onClick={()=>handleAnswerOptionClick()}>Next<FontAwesomeIcon icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;