import questions from "@/questions";
import Question from "../../components/question"

function Quizzes () {
    return questions.map((question) => (
        <Question 
        key={question.id}
        id={question.id}
        question={question.question}
        imagePath={question.imagePath}
        answer1={question.answer1}
        answer2={question.answer2}
        answer3={question.answer3}
        answer4={question.answer4}
        />
    )
)
}

export default Quizzes;