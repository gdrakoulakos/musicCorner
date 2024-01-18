function Question (props) {
    return (
      <><h3>{props.question}</h3>
        <img src={props.imagePath} alt={props.question}></img>
        <ul>
            <li>{props.answer1}</li>
            <li>{props.answer2}</li>
            <li>{props.answer3}</li>
            <li>{props.answer4}</li>
        </ul>
        </>
    )
}

export default Question;