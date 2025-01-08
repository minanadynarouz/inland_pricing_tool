import "./FormSection.css";
import SelectInput from "./SelectInput.jsx";
import FreeInput from "./FreeInput.jsx";
import ButtonInput from "./ButtonInput.jsx";
import TextareaInput from "./TextareaInput.jsx";

export default function SpecialForm({
  specialContainerOptions,
  specialContainerType,
  setSpecialContainerType,
  guage,
  setGuage,
  seaPortOptions,
  seaPort,
  setSeaPort,
  length,
  setLength,
  width,
  setWidth,
  weight,
  setWeight,
  height,
  setHeight,
  place,
  setPlace,
  placesOptions,
  modeOfTransportOptions,
  modeOfTransport,
  setModeOfTransport,
  potential,
  setPotential,
  soc,
  setSoc,
  ultimateOwner,
  setUltimateOwner,
  comment,
  setComment,
  className = "",
}) {
  return (
    <div className={`flex flex-wrap m-10 gap-16 w-full ${className}`}>
      {/* First section of the form */}
      <div className="flex flex-wrap justify-start gap-10 w-full ">
        <SelectInput
          label="Special Container Type"
          options={specialContainerOptions}
          value={specialContainerType}
          onChange={setSpecialContainerType}
        />

        <SelectInput
          label="IG/OOG"
          options={["Select...", "IG", "OOG"]}
          value={guage}
          onChange={setGuage}
        />

        <FreeInput
          type="number"
          label="Length"
          name="length"
          placeholder="0.0"
          value={length}
          onChange={setLength}
        />

        <FreeInput
          type="number"
          label="Width"
          name="width"
          placeholder="0.0"
          value={width}
          onChange={setWidth}
        />

        <FreeInput
          type="number"
          label="Height"
          name="height"
          placeholder="0.0"
          value={height}
          onChange={setHeight}
        />

        <FreeInput
          type="number"
          label="Weight"
          name="weight"
          placeholder="0.0"
          value={weight}
          onChange={setWeight}
        />
      </div>
      {/* End of first section */}

      {/* Second section of the form */}
      <div className="flex flex-wrap justify-start gap-10 w-full ">
        <SelectInput
          label="Sea Port"
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
          label="Total Potential"
          name="quantity"
          placeholder="0"
          value={potential}
          onChange={setPotential}
        />

        <SelectInput
          label="SOC"
          options={["Select...", "Yes", "No"]}
          value={soc}
          onChange={setSoc}
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
      {/* End of second section */}

      <ButtonInput label="Send to X-Chamion" className="bg-custom-green hover:bg-custom-green-hover" />
    </div>
  );
}
