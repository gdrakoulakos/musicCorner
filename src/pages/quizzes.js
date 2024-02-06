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
        setCorrectAnswers(correctAnswers+1);
    }

    function handleAnsweredQuestions () {
        setAnsweredQuestions(answeredQuestions+1);
    }

    function handleResultMessage () {
        if (answeredQuestions === 10 && correctAnswers === 10) {
            setResultMessage("Congratulations!");
        } 
        else if (answeredQuestions === 10 && correctAnswers ===9) {
            setResultMessage("Incredible!");
        } 
        else if (answeredQuestions === 10 && correctAnswers > 6) {
            setResultMessage("Fantastic job!");
        } 
        else if (answeredQuestions === 10 && correctAnswers > 3) {
            setResultMessage("Great effort!")
        }
        else if (answeredQuestions === 10 && correctAnswers < 3){
            setResultMessage("Nice try!");
        }
    }


    return (
        <>

        <div className={styles.score}>Score: {correctAnswers} of {answeredQuestions}</div>
        {resultMessage && <div className={styles.resultMessage}>{resultMessage}</div>}
        
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
            ))
        }
        
        </>
    );
}

export default Quizzes;