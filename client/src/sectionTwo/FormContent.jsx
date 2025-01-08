import containerImage from '../assets/Container -12.png';
import portImage from '../assets/port.svg';
import click from '../assets/pay-per-click-svgrepo-com.svg';
import FormSectionContainer from "../FormSections/FormSectionContainer.jsx";
import FormSectionPort from "../FormSections/FormSectionPort.jsx";
import FormSectionSubmit from "../FormSections/FormSectionSubmit.jsx";
import FormsWrapper from '../FormsWrapper/FormsWrapper.jsx';
import { containerOptions, seaPortOptions, placesOptions, modeOfTransportOptions } from "../data.js";
import './FormContent.css'
import { useState } from 'react';
import axios from 'axios';
import Icons from '../nav/Icons.jsx';
import refresh from '../assets/refresh.svg'


export default function FormContent() {
  const [containerType, setContainerType] = useState("");
  const [seaPort, setSeaPort] = useState("");
  const [place, setPlace] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("");
  const [weight, setWeight] = useState("");
  const [potential, setPotential] = useState("");
  const [soc, setSoc] = useState("No");
  const [ultimateOwner, setUltimateOwner] = useState("");
  const [comment, setComment] = useState("");

  const [priceFromDB, setPriceFromDB] = useState(0);
  const [priceQueried, setPriceQueried] = useState(false);

  const clearForm = () => {
    setContainerType("");
    setSeaPort("");
    setPlace("");
    setModeOfTransport("");
    setWeight("");
    setPotential("");
    setSoc("No");
    setUltimateOwner("");
    setComment("");
    setPriceFromDB(0);
    setPriceQueried(false);
  };

  const handleMainFormSubmit = async (e) => {
    console.log("Frontend containerType: ", containerType);
    console.log("Frontend seaPort: ", seaPort);
    console.log("Frontend place: ", place);
    console.log("Frontend modeOfTransport: ", modeOfTransport);
    console.log("Frontend weight: ", weight);
    console.log("Frontend potential: ", potential);
    console.log("Frontend soc: ", soc);
    console.log("Frontend ultimateOwner: ", ultimateOwner);
    console.log("Frontend comment: ", comment);

    e.preventDefault();
    setPriceQueried(true);
    try {
      const response = await axios.post("http://localhost:5000/queryPrice", {
        containerType,
        seaPort,
        place
      })
      if (response.status === 200) {
        console.log("Success, Data received from Backend", response.data.price);
        setPriceFromDB(Number(response.data.price))
      } else {
        console.error("Error in sending the Data to backend");
      }
    } catch (error) {
      alert("Choose all fields below to get the rate");
      console.error({ error: "Error in axios catch block." })
    }
  }

  return (

    <>
      <Icons imgSrc={refresh} imgAlt="refresh" iconName="refresh" displayName="Refresh to get new price" clearForm={clearForm} />
      <form onSubmit={handleMainFormSubmit}>

        <FormsWrapper
          imgUrl={containerImage}
          imgAlt={"Container"}
          FormItSelf={FormSectionContainer}
          formProps={{
            containerOptions,
            containerType, setContainerType,
            weight, setWeight,
            potential, setPotential,
            soc, setSoc
          }}
        />

        <FormsWrapper
          imgUrl={portImage}
          imgAlt={"Port Image"}
          FormItSelf={FormSectionPort}
          formProps={{
            seaPortOptions,
            seaPort, setSeaPort,
            placesOptions,
            place, setPlace,
            modeOfTransportOptions,
            modeOfTransport, setModeOfTransport,
            ultimateOwner, setUltimateOwner,
            comment, setComment
          }}
        />

        <hr className="style13" />
        <FormsWrapper
          imgUrl={click}
          imgAlt={"click"}
          FormItSelf={FormSectionSubmit}
          formProps={{ priceReceived: priceFromDB, priceQueried }}
        />
      </form>
    </>

  );
}
