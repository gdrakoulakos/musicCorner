import { useRef } from "react";
import styles from "./Instruments.module.css"

function Instruments () {
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
                <h1>Double Bass</h1>
            </div>
            <div>
                <button className={styles.instrumentPlay} onClick={start}>►</button>
            </div>
            <div className={styles.instrumentImage}>
                <img src="./images/instruments/bass1.jpg" alt="bass"></img>
                <audio ref={audioRef} src="/audio/instruments/bass/bass.mp3" />
            </div>
            <div className={styles.instrumentInfo}>
                <p>The double bass, also known as the contrabass, is the largest and lowest-pitched member of the string instrument family. It typically has four strings tuned in perfect fourths. Played with a bow or plucked, it provides the foundational bass line in classical, jazz, and various other music genres. With a deep, resonant sound, the double bass serves as both a melodic and rhythmic anchor in orchestras and ensembles. Its size and shape make it stand upright on the floor, requiring the musician to either sit or stand while playing.</p>
            </div>
        </div>
    )
}

export default Instruments;