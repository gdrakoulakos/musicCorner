import {useState} from "react";
import styles from "./Question.module.css";

function Question (props) {

    const [answerResult, setAnswerResult] = useState (null);
    const [colorAnswer, setColorAnswer] = useState (""); 
    
    const correctAnswer = "Fantastic! You got it right! 🎉";
    const incorrectAnswer = "Oops! That one was a bit tricky!";
    const doubleSelectedAnswer = "Oh! You have already selected an answer 😉"

    function handleClickedAnswer (event) {
        const clickedAnswer=event.target.innerText;
        if (clickedAnswer === props.correctAnswer && answerResult === null) {
            setAnswerResult(correctAnswer);
            props.onCorrectAnswers();
            props.onAnsweredQuestions();
            props.onResultMessage();
            setColorAnswer("#abf7ab");
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
            setColorAnswer("#ffd0ac");
        }
    }

    return (
        <>
            <div className={styles.questionsContainer}>
                <h3>{props.question}</h3>
                <img src={props.imagePath} alt={props.question}></img>
                <div className={styles.answersContainer}>
                    <span style={{backgroundColor:colorAnswer}} onClick={handleClickedAnswer}>{props.answer1}</span>
                    <span style={{backgroundColor:colorAnswer}} onClick={handleClickedAnswer}>{props.answer2}</span>
                    <span style={{backgroundColor:colorAnswer}} onClick={handleClickedAnswer}>{props.answer3}</span>
                    <span style={{backgroundColor:colorAnswer}} onClick={handleClickedAnswer}>{props.answer4}</span>
                    <div>{answerResult}</div>                    
                </div>
            </div>
        </>
    )
}

export default Question;