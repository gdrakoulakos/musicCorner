import instruments from "@/instruments";
import Instrument from "../../components/instrument"
import DoubleBassSvg from "../../components/svg/strings/doubleBassSvg/index";
import CelloSvg from "../../components/svg/strings/celloSvg";
import ViolinSvg from "../../components/svg/strings/violinSvg";
import ViolanSvg from "../../components/svg/strings/violaSvg";

function Strings () {
    
    return (
        <>
        <div>
            
            <DoubleBassSvg />
            <CelloSvg />
            <ViolanSvg />
            <ViolinSvg />
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