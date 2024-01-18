import { useState } from "react";
import styles from "./Question.module.css";

function Question (props) {
    const [selectedAnswer, setSelectedAnswer] = useState (); 
    const [answerResult, setAnswerResult] = useState (); 
    const correctAnswer = "Fantastic! You got it right! 🎉";
    const incorrectAnswer = "Oops! That one was a bit tricky!";
    
    function handleSelectedAnswer (event) {
        const clickedAnswer=event.target.innerText;

        setSelectedAnswer(clickedAnswer);
        if (clickedAnswer === props.correctAnswer) {
            setAnswerResult(correctAnswer)
        }
        else {
            setAnswerResult(incorrectAnswer)
        }
    }

    return (
        <>
            <h3>{props.question}</h3>
            <img src={props.imagePath} alt={props.question}></img>
            <div className={styles.answersContainer}>
                <span onClick={handleSelectedAnswer}>{props.answer1}</span>
                <span onClick={handleSelectedAnswer}>{props.answer2}</span>
                <span onClick={handleSelectedAnswer}>{props.answer3}</span>
                <span onClick={handleSelectedAnswer}>{props.answer4}</span>
                <div style={{color:answerResult === correctAnswer ? 'green' :'red' }}>{answerResult}</div>
            </div>
        </>
    )
}

export default Question;