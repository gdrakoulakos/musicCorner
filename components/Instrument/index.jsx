import { useRef } from "react";
import styles from "./Instrument.module.css"
import YoutubeEmbed from "./YoutubeEmbed"

function Instrument (props) {
    const audioRef = useRef();
    const start = () => {
        if (audioRef.current) {
        audioRef.current.play();
        } else {
        console.error("Audio object not initialized.");
        }
  };
    return (
        
        <div className={styles.instrumentContainer}>
            <div className={styles.instrumentTitle}>
                <h1>{props.name}</h1>
            </div>
            <div>
                <button className={styles.instrumentPlay} onClick={start}>►</button>
            </div>
            <div className={styles.instrumentImage}>
                <img src={props.imgURL} alt={props.name}></img>
                <audio ref={audioRef} src={props.audio} />
            </div>
            <div className={styles.instrumentInfo}>
                <p>{props.description}</p>
            </div>
            <div>
                <YoutubeEmbed embedId={props.youtubeURL} />
            </div>
        </div>
    )
}

export default Instrument;