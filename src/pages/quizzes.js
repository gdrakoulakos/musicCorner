import questions from "@/questions";
import Question from "../../components/question"
import { useEffect, useState } from "react";
import styles from "../styles/Quizzes.module.css"

function Quizzes () {
    const [correctAnswers, setCorrectAnswers] = useState (0);
    const [answeredQuestions, setAnsweredQuestions] = useState (0);
    const [resultMessage, setResultMessage] = useState ("");

    useEffect(() => {
        handleResultMessage();
      }, [answeredQuestions, correctAnswers]);
    

    function handleCorrectAnswers () {
        setCorrectAnswers(correctAnswers+1)
    }

    function handleAnsweredQuestions () {
        setAnsweredQuestions(answeredQuestions+1)
    }

    function handleResultMessage () {
        console.log("handleResultMessage");
        if (answeredQuestions === 10 && correctAnswers === 10) {
            setResultMessage("Congratulations! You're a musical genius!")
            console.log("10");
        } 
        else if (answeredQuestions === 10 && correctAnswers ===9) {
            setResultMessage("Incredible! You're a harmony prodigy!")
            console.log("9");
        } 
        else if (answeredQuestions === 10 && correctAnswers > 6) {
            setResultMessage("Fantastic job! You're a true harmonic explorer.")
            console.log("6");
        } 
        else if (answeredQuestions === 10 && correctAnswers > 3) {
            setResultMessage("Great effort! You're on your way to becoming a melody explorer")
            console.log("4");
        }
        else if (answeredQuestions === 10 && correctAnswers < 3){
            setResultMessage("Nice try! You're just starting your musical journey.")
            console.log("3");
        }
    }

    
    return (
        <>
        <p className={styles.resultMessage}>{resultMessage}</p>
        <p className={styles.score}>Score: {correctAnswers} of {answeredQuestions}</p>
        
        {questions.map((question) => (
        <Question 
        key={question.id}
        id={question.id}
        question={question.question}
        imagePath={question.imagePath}
        answer1={question.answer1}
        answer2={question.answer2}
        answer3={question.answer3}
        answer4={question.answer4}
        correctAnswer={question.correctAnswer}
        onCorrectAnswers={handleCorrectAnswers}
        onAnsweredQuestions={handleAnsweredQuestions}
        onResultMessage={handleResultMessage}
        />
            ))}
        
        </>
    );
}

export default Quizzes;