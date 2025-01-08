import "./FormSection.css";
import SelectInput from "./SelectInput.jsx";
import FreeInput from "./FreeInput.jsx";
import TextareaInput from "./TextareaInput.jsx";


export default function FormSectionPort({ seaPortOptions, seaPort, setSeaPort, place, setPlace, placesOptions, modeOfTransportOptions, modeOfTransport, setModeOfTransport, ultimateOwner, setUltimateOwner, comment, setComment, className = "" }) {

  return (
    <div className={`flex flex-wrap m-10 gap-16 justify-start ${className}`} >

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
        type="text"
        label="Ultimate Owner (UO)"
        name="uo"
        placeholder="DHL Global"
        value={ultimateOwner}
        onChange={setUltimateOwner}
      />

      <TextareaInput
        label="Comment"
        name="comment"
        value={comment}
        onChange={setComment}
      />
    </div>
  );
}
