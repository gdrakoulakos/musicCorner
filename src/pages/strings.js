import instruments from "@/instruments";
import Instrument from "../../components/Instrument"

function createInstrument (instrument) {
    return (
        <Instrument 
            id={instrument.id}
            category={instrument.category}
            name={instrument.name}
            imgURL={instrument.imgURL}
            audio={instrument.audio}
            description={instrument.description}
            youtubeURL={instrument.youtubeURL}
        />
    )
}

function Strings () {
    return (
       <div>
        {instruments.map(createInstrument)}
       </div>
    )
}

export default Strings;