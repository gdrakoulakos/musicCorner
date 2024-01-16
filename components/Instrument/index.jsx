import { useRef } from "react";
import styles from "./Instrument.module.css"
import instruments from "@/instruments";

function Instrument () {
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
                <h1>{instruments[0].name}</h1>
            </div>
            <div>
                <button className={styles.instrumentPlay} onClick={start}>►</button>
            </div>
            <div className={styles.instrumentImage}>
                <img src={instruments[0].imgURL} alt={instruments[0].name}></img>
                <audio ref={audioRef} src={instruments[0].audio} />
            </div>
            <div className={styles.instrumentInfo}>
                <p>{instruments[0].description}</p>
            </div>
        </div>
    )
}

export default Instrument;