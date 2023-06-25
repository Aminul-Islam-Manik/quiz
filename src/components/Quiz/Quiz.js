import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css';
import Option from '../Option/Option';

const Quiz = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data)

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
    const allQuizes = quizes.data.questions;
    // console.log(allQuizes)

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
            <div className="quiz">
                
                <h4>Your quiz{score}/{quizes.data.questions.length}</h4>
                Result:{result}

                {allQuizes[currentQuestion].question}
                {allQuizes[currentQuestion].correctAnswer}

                {
                    allQuizes[currentQuestion].options.map(option=><Option key={option.idx} option={option} handleAnswerClick={handleAnswerClick}></Option>)
                }

                <button className="btn" onClick={()=>handleAnswerOptionClick()}>Next</button>
            </div>
        </div>
    );
};

export default Quiz;