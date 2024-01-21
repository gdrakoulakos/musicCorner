import questions from "@/questions";
import Question from "../../components/question"
import { useState } from "react";
import styles from "../styles/Quizzes.module.css"

function Quizzes () {
    const [quizResult, setQuizResult] = useState (0);

    function handleQuizResult () {
        setQuizResult(quizResult+1)
    }
    
    return (
        <>
        <p className={styles.score}>Score: {quizResult} of 10</p>
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
        onQuizResult={handleQuizResult}
        />
            ))}
        </>
    );
}

export default Quizzes;