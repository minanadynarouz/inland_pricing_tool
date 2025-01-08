import specialform from '../assets/specialform.svg';
import SpecialForm from "../FormSections/SpecialForm.jsx";
import FormsWrapper from '../FormsWrapper/FormsWrapper.jsx';
import { seaPortOptions, placesOptions, modeOfTransportOptions, specialContainerOptions } from "../data.js";
import { useState } from 'react';
import Icons from '../nav/Icons.jsx';
import refresh from '../assets/refresh.svg'


export default function SpecialFormContent() {
  const [specialContainerType, setSpecialContainerType] = useState("");
  const [guage, setGuage] = useState("");
  const [seaPort, setSeaPort] = useState("");
  const [place, setPlace] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [potential, setPotential] = useState("");
  const [soc, setSoc] = useState("No");
  const [ultimateOwner, setUltimateOwner] = useState("");
  const [comment, setComment] = useState("");

  const clearForm = () => {
    setSpecialContainerType("");
    setGuage("");
    setSeaPort("");
    setPlace("");
    setModeOfTransport("");
    setLength("");
    setWidth("");
    setHeight("");
    setWeight("");
    setPotential("");
    setSoc("No");
    setUltimateOwner("");
    setComment("");
  };

  return (

    <>
      <Icons imgSrc={refresh} imgAlt="refresh" iconName="refresh" displayName="Refresh to get new price" clearForm={clearForm} />
      <form >

        <FormsWrapper
          imgUrl={specialform}
          imgAlt={"specialform"}
          FormItSelf={SpecialForm}
          formProps={{
            specialContainerOptions, specialContainerType, setSpecialContainerType,
            guage, setGuage,
            seaPortOptions, seaPort, setSeaPort,
            length, setLength,
            width, setWidth,
            height, setHeight,
            weight, setWeight,
            place, setPlace, placesOptions,
            modeOfTransportOptions, modeOfTransport, setModeOfTransport,
            potential, setPotential,
            soc, setSoc,
            ultimateOwner, setUltimateOwner,
            comment, setComment
          }}
        />
      </form>
    </>

  );
}
