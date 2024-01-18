import styles from "./Question.module.css"

function Question (props) {
    return (
      <><h3>{props.question}</h3>
        <img src={props.imagePath} alt={props.question}></img>
        <div className={styles.answersContainer}>
            <div>{props.answer1}</div>
            <div>{props.answer2}</div>
            <div>{props.answer3}</div>
            <div>{props.answer4}</div>
        </div>
        </>
    )
}

export default Question;