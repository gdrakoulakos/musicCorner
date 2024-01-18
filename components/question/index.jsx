import styles from "./Question.module.css"

function Question (props) {
    return (
      <><h3>{props.question}</h3>
        <img src={props.imagePath} alt={props.question}></img>
        <div className={styles.answersContainer}>
            <p>{props.answer1}</p>
            <p>{props.answer2}</p>
            <p>{props.answer3}</p>
            <p>{props.answer4}</p>
        </div>
        </>
    )
}

export default Question;