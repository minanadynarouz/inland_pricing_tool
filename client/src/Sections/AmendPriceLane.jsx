import axios from 'axios';
import FormsWrapper from "../FormsWrapper/FormsWrapper";
import Navbar from "../nav/nav";
import SectionOne from "../sectionOne/sectionOne";
import amendForm from "../assets/amendForm.svg"
import AmendPriceLaneForm from "../FormSections/AmendPriceLaneForm";
import { containerOptions, seaPortOptions, placesOptions, modeOfTransportOptions } from "../data.js";
import { useState } from "react";


const AmendPriceLane = ({ onLogout }) => {

  const [containerType, setContainerType] = useState("");
  const [seaPort, setSeaPort] = useState("");
  const [place, setPlace] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("");
  const [price, setPrice] = useState("");

  const handleAmendLaneFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("Amend Price Lane Frontend: ", containerType);
    // console.log("Amend Price Lane Frontend: ", seaPort);
    // console.log("Amend Price Lane Frontend: ", place);
    // console.log("Amend Price Lane Frontend: ", modeOfTransport);
    // console.log("Amend Price Lane Frontend: ", price);


    if (!containerType || !seaPort || !place || !modeOfTransport || !price) {
      alert("All fields should be inserted !")
    }

    try {
      const response = await axios.post("http://localhost:5000/insertPrice", {
        containerType,
        seaPort,
        place,
        price
      })
      if (response.status === 200) {
        console.log("Success, Lane updated in Database");
        alert(`Table ${seaPort}, Location ${place}, Price ${price} / ${containerType}`)
      } else {
        console.error("Error in sending the Data to backend");
      }
    } catch (error) {
      console.error({ error: "Error in axios catch block Amend Price Lane Function." })
    }
  }

  return (
    <>
      <Navbar isLoggedIn={true} onLogout={onLogout} />
      <div className="flex justify-center">
        <div className="h-[90%] w-[90%] xl:h-[70%] mb-6 mt-4 sm:mt-6 md:mt-0 p-30 border-5 border-gray-300 rounded-2xl">
          <SectionOne text={"Fill the form below, then click submit to <strong>Amend Price Lane</strong> in the Database"} />
          <form onSubmit={handleAmendLaneFormSubmit}>

            <FormsWrapper
              imgUrl={amendForm}
              imgAlt={"amend gear"}
              FormItSelf={AmendPriceLaneForm}
              formProps={{
                containerOptions, containerType, setContainerType,
                seaPortOptions, seaPort, setSeaPort,
                place, setPlace, placesOptions,
                modeOfTransportOptions, modeOfTransport, setModeOfTransport,
                price, setPrice
              }}
            />
          </form>
        </div>
      </div>
    </>

  );
}

export default AmendPriceLane;