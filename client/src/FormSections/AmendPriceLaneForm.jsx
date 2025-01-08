import "./FormSection.css";
import SelectInput from "./SelectInput.jsx";
import FreeInput from "./FreeInput.jsx";
import ButtonInput from "./ButtonInput.jsx";


export default function AmendPriceLaneForm({ containerOptions, containerType, setContainerType, seaPortOptions, seaPort, setSeaPort, place, setPlace, placesOptions, modeOfTransportOptions, modeOfTransport, setModeOfTransport, price, setPrice, className = "" }) {

  return (
    <div className={`flex flex-wrap m-10 gap-16 justify-start ${className}`} >

      <SelectInput
        label="Container Type"
        options={containerOptions}
        value={containerType}
        onChange={setContainerType}
      />

      <SelectInput
        label="POL/POD"
        options={seaPortOptions}
        value={seaPort}
        onChange={setSeaPort}
      />

      <SelectInput
        label="POR/FPOD"
        options={placesOptions}
        value={place}
        onChange={setPlace}
      />

      <SelectInput
        label="Mode Of Transport"
        options={modeOfTransportOptions}
        value={modeOfTransport}
        onChange={setModeOfTransport}
      />

      <FreeInput
        type="number"
        label="Price"
        name="new_price"
        placeholder="0.0"
        value={price}
        onChange={setPrice}
      />

      <ButtonInput label="Update Price in DB" className="bg-custom-blue hover:bg-blue-600" />

    </div>
  );
}
