import instruments from "@/instruments";
import Instrument from "../../components/instrument"

function Strings () {
    return instruments.map((instrument) => (
            <Instrument 
            key={instrument.id}
            id={instrument.id}
            category={instrument.category}
            name={instrument.name}
            imgURL={instrument.imgURL}
            audio={instrument.audio}
            description={instrument.description}
            youtubeURL={instrument.youtubeURL}
            />
        )
    )
}

export default Strings;