import instruments from "@/instruments";
import Instrument from "../../components/instrument"
import DoubleBassSvg from "../../components/svg/strings/doubleBassSvg/index";

function Strings () {
    return (
        <>
        <div>
            <DoubleBassSvg />
        </div>
        {instruments.map((instrument) => (
            <Instrument 
            key={instrument.id}
            id={instrument.id}
            category={instrument.category}
            name={instrument.name}
            imagePath={instrument.imagePath}
            audio={instrument.audio}
            description={instrument.description}
            youtubeURL={instrument.youtubeURL}
            />
        ))}
        
    </>
    );
}

export default Strings;