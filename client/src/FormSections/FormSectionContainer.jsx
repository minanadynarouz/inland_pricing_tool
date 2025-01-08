import "./FormSection.css";
import SelectInput from "./SelectInput.jsx";
import FreeInput from "./FreeInput.jsx";


export default function FormSectionContainer({ containerOptions, containerType, setContainerType, weight, setWeight, potential, setPotential, soc, setSoc, className = "" }) {

  return (
    <div className={`flex flex-wrap m-10 gap-16 justify-start ${className}`} >
      {/* Container Select */}
      <SelectInput
        label="Container Type"
        options={containerOptions}
        value={containerType}
        onChange={setContainerType}
      />

      <FreeInput
        type="number"
        label="Weight"
        name="weight"
        placeholder="Tons"
        value={weight}
        max={30}
        onChange={setWeight}
      />

      <FreeInput
        type="number"
        label="Total Potential"
        name="quantity"
        placeholder="0"
        value={potential}
        onChange={setPotential}
      />

      {/* come back to this component again */}
      <SelectInput
        label="SOC"
        options={["Select...", "Yes", "No"]}
        value={soc}
        onChange={setSoc}
      />

    </div>
  );
}
