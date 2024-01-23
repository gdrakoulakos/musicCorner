import { useEffect, useState } from "react";
import styles from "./Question.module.css";

function Question (props) {
    const [selectedAnswer, setSelectedAnswer] = useState (); 
    const [answerResult, setAnswerResult] = useState (null);
    
    
    const correctAnswer = "Fantastic! You got it right! 🎉";
    const incorrectAnswer = "Oops! That one was a bit tricky!";
    const doubleSelectedAnswer = "Oh! You have already selected an answer 😉"
 
    function handleSelectedAnswer (event) {
        const clickedAnswer=event.target.innerText;
        setSelectedAnswer(clickedAnswer);
        if (clickedAnswer === props.correctAnswer && answerResult === null) {
            setAnswerResult(correctAnswer)
            props.onCorrectAnswers();
            props.onAnsweredQuestions();
            props.onResultMessage();
            }                     
        else if (clickedAnswer === props.correctAnswer && answerResult !== null) {
            setAnswerResult(doubleSelectedAnswer)
        }
        else if (clickedAnswer !== props.correctAnswer && answerResult !== null) {
            setAnswerResult(doubleSelectedAnswer)
        }
        else {
            setAnswerResult(incorrectAnswer)
            props.onAnsweredQuestions();
            props.onResultMessage();
        }
    }

    return (
        <>
            <div className={styles.questionsContainer}>
                <h3>{props.question}</h3>
                <img src={props.imagePath} alt={props.question}></img>
                <div className={styles.answersContainer}>
                    <span onClick={handleSelectedAnswer}>{props.answer1}</span>
                    <span onClick={handleSelectedAnswer}>{props.answer2}</span>
                    <span onClick={handleSelectedAnswer}>{props.answer3}</span>
                    <span onClick={handleSelectedAnswer}>{props.answer4}</span>
                    <div style={{color:answerResult === correctAnswer ? 'green' :'red' }}>{answerResult}</div>                    
                </div>
            </div>
        </>
    )
}

export default Question;